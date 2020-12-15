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


    @JoinColumn(name="sleep_id", referencedColumnName = "id")
    @OneToOne (cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"diary_entries"})
    private Sleep sleep;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="meditation_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"diary_entries"})
    private Meditation meditation;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="screenTime_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"diary_entries"})
    private ScreenTime screenTime;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="waterIntake_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"diary_entries"})
    private WaterIntake waterIntake;

//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    @JsonIgnoreProperties({"diary_entries"})
//    private User user;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="breathing_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"diary_entries"})
    private Breathing breathing;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="journal_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"diary_entries"})
    private Journal journal;

    public DiaryEntry(String date) {
        this.date = date;
        this.sleep = null;
        this.meditation = null;
        this.screenTime = null;
        this.waterIntake = null;
        this.breathing = null;
        this.journal = null;
//        this.user = null;
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

    public Journal getJournal() {
        return journal;
    }

    public void setJournal(Journal journal) {
        this.journal = journal;
    }
}
