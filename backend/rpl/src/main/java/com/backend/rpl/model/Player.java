package com.backend.rpl.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="rpl_players_time")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
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

    private Integer unsub;

    public Player() {
    }

    public Player(Integer unsub, Integer subs, Integer compl, Integer starts, Double min, Integer mp, Integer age, String squad, String pos, String nation, String name, Long id) {
        this.unsub = unsub;
        this.subs = subs;
        this.compl = compl;
        this.starts = starts;
        this.min = min;
        this.mp = mp;
        this.age = age;
        this.squad = squad;
        this.pos = pos;
        this.nation = nation;
        this.name = name;
        this.id = id;
    }
}
