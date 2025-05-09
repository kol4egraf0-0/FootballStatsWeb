package com.backend.rpl.controller;

import com.backend.rpl.model.Player;
import com.backend.rpl.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/player")
@CrossOrigin(origins = "http://localhost:5173")
public class PlayerController {
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) String nation) {
        if (team != null && name != null) {
             return playerService.getPlayerByTeamAndName(team, name);
        }
        else if (position != null && name != null) {
            return playerService.getPlayerByPosAndName(position, name);
        } else if (nation != null && name != null) {
            return playerService.getPlayerByNationAndName(nation, name);
        } else if (team != null) {
            return playerService.getPlayerFromSquad(team);
        } else if (name != null) {
            return playerService.getPlayerByName(name);
        } else if (position != null) {
            return playerService.getPlayerByPos(position);
        } else if (nation != null) {
            return playerService.getPlayerByNation(nation);
        } else {
            return playerService.getAllPlayers();
        }
    }





    //пусть будет но не понадобится тк админки чот не будет наврен
    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player){
        Player createdPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player updatedPlayer) {
        Player resultPlayer = playerService.updatePlayer(updatedPlayer);
        if (resultPlayer != null) {
            return new ResponseEntity<>(resultPlayer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName) {
        playerService.deletePlayer(playerName);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }
}
