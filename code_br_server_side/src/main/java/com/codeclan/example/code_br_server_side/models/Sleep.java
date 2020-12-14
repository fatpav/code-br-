package com.codeclan.example.code_br_server_side.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="sleep")

public class Sleep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "hours")
    private int hours;

    @JsonIgnoreProperties({"hours"})
    @OneToOne (mappedBy = "hours", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;


    public Sleep(int hours) {
        this.hours = hours;
    }

    public Sleep (){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }
}
