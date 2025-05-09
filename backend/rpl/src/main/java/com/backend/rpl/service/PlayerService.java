package com.backend.rpl.service;

import com.backend.rpl.model.Player;
import com.backend.rpl.repository.PlayerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayerFromSquad(String team) {
        return playerRepository.findAll().stream()
                .filter(player -> team.equalsIgnoreCase(player.getSquad()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByName(String searchText) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByPos(String position) {
        return playerRepository.findAll().stream()
                .filter(player -> position.equalsIgnoreCase(player.getPos()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByNation(String nation) {
        return playerRepository.findAll().stream()
                .filter(player -> nation == null || (player.getNation() != null && player.getNation().toLowerCase().contains(nation.toLowerCase())))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByPosAndName(String position, String name) {
        return playerRepository.findAll().stream()
                .filter(player -> position.equalsIgnoreCase(player.getPos()) && player.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByTeamAndName(String team, String name) {
        return playerRepository.findAll().stream()
                .filter(player -> team.equalsIgnoreCase(player.getSquad()) && player.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByNationAndName(String nation, String name) {
        return playerRepository.findAll().stream()
                .filter(player -> nation.equalsIgnoreCase(player.getNation()) && player.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }

    public Player updatePlayer(Player updatedPlayer) {
        Optional<Player> existingPlayer = playerRepository.findByName(updatedPlayer.getName());

        if (existingPlayer.isPresent()) {
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setSquad(updatedPlayer.getSquad());
            playerToUpdate.setPos(updatedPlayer.getPos());
            playerToUpdate.setNation(updatedPlayer.getNation());
            playerRepository.save(playerToUpdate);
            return playerToUpdate;
        }
        return null;
    }
    @Transactional //либо выпонлнится либо нет, изменения откатываются
    public void deletePlayer(String playerName) {
        playerRepository.deleteByName(playerName);
    }
}
