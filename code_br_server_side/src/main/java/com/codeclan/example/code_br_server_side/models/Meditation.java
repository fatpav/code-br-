package com.codeclan.example.code_br_server_side.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="meditation")

public class Meditation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "minutes")
    private int minutes;

//    @Column (name = "completed")
//    private boolean completed;

    @JsonIgnoreProperties({"meditation"})
    @OneToOne (mappedBy = "meditation", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;

    public Meditation(int minutes, DiaryEntry diaryEntry) {
        this.minutes = minutes;
        this.diaryEntry = diaryEntry;
//        this.completed = completed;
    }

    public Meditation (){}

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
