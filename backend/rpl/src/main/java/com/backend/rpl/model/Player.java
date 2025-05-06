package com.backend.rpl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="rpl_players_time")
public class Player {
    @Id
    @Column(name = "Name", unique = true)
    private String name;

    private String nation;

    private String pos;

    private String squad;

    private int age;

    private int mp;

    private double min;

    private int starts;

    private int compl;

    private int subs;

    private int unSub;

    public Player() {
    }

    public Player(String name, String nation, String pos, String squad, int age, int mp, double min, int starts, int compl, int subs, int unSub) {
        this.name = name;
        this.nation = nation;
        this.pos = pos;
        this.squad = squad;
        this.age = age;
        this.mp = mp;
        this.min = min;
        this.starts = starts;
        this.compl = compl;
        this.subs = subs;
        this.unSub = unSub;
    }
}
