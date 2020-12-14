package com.codeclan.example.code_br_server_side.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="breathing")
public class Breathing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "minutes")
    private int minutes;

    @JsonIgnoreProperties({"breathing"})
    @OneToOne(mappedBy = "breathing")
    private DiaryEntry diaryEntry;

    public Breathing(int minutes) {
        this.minutes = minutes;
    }

    public Breathing (){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

}
