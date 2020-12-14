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

    @Column (name = "completed")
    private boolean completed;

    @JsonIgnoreProperties({"breathing"})
    @OneToOne (mappedBy = "breathing", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;

    public Breathing(int minutes, boolean completed) {
        this.minutes = minutes;
        this.completed = completed;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
