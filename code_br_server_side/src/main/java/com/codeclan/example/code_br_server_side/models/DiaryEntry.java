package com.codeclan.example.code_br_server_side.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="diary_entries")
public class DiaryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="date")
    private String date;

    @JsonIgnoreProperties({"diary_entries"})
    @OneToOne (mappedBy = "diary_entries", fetch = FetchType.LAZY)
    private Sleep sleep;

    @JsonIgnoreProperties({"diary_entries"})
    @OneToOne (mappedBy = "diary_entries", fetch = FetchType.LAZY)
    private Meditation meditation;

    @JsonIgnoreProperties({"diary_entries"})
    @OneToOne (mappedBy = "diary_entries", fetch = FetchType.LAZY)
    private ScreenTime screenTime;

    @JsonIgnoreProperties({"diary_entries"})
    @OneToOne (mappedBy = "diary_entries", fetch = FetchType.LAZY)
    private WaterIntake waterIntake;

    @JsonIgnoreProperties({"diary_entries"})
    @OneToOne (mappedBy = "diary_entries", fetch = FetchType.LAZY)
    private Breathing breathing;

    public DiaryEntry(Long id, String date) {
        this.id = id;
        this.date = date;
        this.sleep = null;
        this.meditation = null;
        this.screenTime = null;
        this.waterIntake = null;
        this.breathing = null;
    }

    public DiaryEntry(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Sleep getSleep() {
        return sleep;
    }

    public void setSleep(Sleep sleep) {
        this.sleep = sleep;
    }

    public Meditation getMeditation() {
        return meditation;
    }

    public void setMeditation(Meditation meditation) {
        this.meditation = meditation;
    }

    public ScreenTime getScreenTime() {
        return screenTime;
    }

    public void setScreenTime(ScreenTime screenTime) {
        this.screenTime = screenTime;
    }

    public WaterIntake getWaterIntake() {
        return waterIntake;
    }

    public void setWaterIntake(WaterIntake waterIntake) {
        this.waterIntake = waterIntake;
    }

    public Breathing getBreathing() {
        return breathing;
    }

    public void setBreathing(Breathing breathing) {
        this.breathing = breathing;
    }


}
