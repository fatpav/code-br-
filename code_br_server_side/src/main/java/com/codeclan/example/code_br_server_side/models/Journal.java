package com.codeclan.example.code_br_server_side.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table (name = "journal")
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "journal_entry")
    private String journal_entry;

    @ManyToOne
    @JoinColumn(name ="user_id", nullable = false)
    @JsonIgnoreProperties ({"journal"})
    private User user;

    public Journal(String date, String journal_entry, User user) {
        this.date = date;
        this.journal_entry = journal_entry;
        this.user = user;
    }

    public Journal (){}

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

    public String getJournal_entry() {
        return journal_entry;
    }

    public void setJournal_entry(String journal_entry) {
        this.journal_entry = journal_entry;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
