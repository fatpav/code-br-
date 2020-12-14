package com.codeclan.example.code_br_server_side.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="waterIntake")

public class WaterIntake {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;


    @Column(name = "litres")
    private double litres;

    @JsonIgnoreProperties ({"waterIntake"})
    @OneToOne (mappedBy = "waterIntake", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;

    public WaterIntake(double litres, DiaryEntry diaryEntry) {
        this.litres = litres;
        this.diaryEntry = diaryEntry;
    }

    public WaterIntake (){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getLitres() {
        return litres;
    }

    public void setLitres(double litres) {
        this.litres = litres;
    }
}
