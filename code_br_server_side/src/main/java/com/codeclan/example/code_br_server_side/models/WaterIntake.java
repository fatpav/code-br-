package com.codeclan.example.code_br_server_side.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="water")

public class WaterIntake {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    
    @Column(name = "litres")
    private double litres;

    @JsonIgnoreProperties ({"water"})
    @OneToOne (mappedBy = "water", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;

    public WaterIntake(double litres) {
        this.litres = litres;
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
