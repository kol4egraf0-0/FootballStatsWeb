package com.backend.rpl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name="rpl_players_time")
public class Player {
    @Id
    @Column(name = "Name", unique = true)
    private String name;

    private String nation;

    private String pos;

    private String squad;

    private Integer age;

    private Integer mp;

    private Double min;

    private Integer starts;

    private Integer compl;

    private Integer subs;

    private Integer unSub;

    public Player() {
    }

    public Player(String name, String nation, String pos, String squad, Integer age, Integer mp, Double min, Integer starts, Integer compl, Integer subs, Integer unSub) {
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
