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

    @Column(name = "journal_entry")
    private String journal_entry;

    @JsonIgnoreProperties({"journal"})
    @OneToOne (mappedBy = "journal", fetch = FetchType.LAZY)
    private DiaryEntry diaryEntry;


//    @ManyToOne
//    @JoinColumn(name ="user_id", nullable = false)
//    @JsonIgnoreProperties ({"journal"})
//    private User user;

    public Journal(String journal_entry, DiaryEntry diaryEntry) {
        this.journal_entry = journal_entry;
        this.diaryEntry = diaryEntry;
//        this.user = user;
    }

    public Journal (){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJournal_entry() {
        return journal_entry;
    }

    public void setJournal_entry(String journal_entry) {
        this.journal_entry = journal_entry;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
