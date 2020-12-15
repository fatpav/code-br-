//package com.codeclan.example.code_br_server_side.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table (name = "user")
//
//public class User {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="id")
//    private Long id;
//
//    @Column(name = "first_name")
//    private String first_name;
//
//    @Column(name = "last_name")
//    private String last_name;
//
//    @Column(name = "age")
//    private int age;
//
//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    @JsonIgnoreProperties ({"user"})
//    private List<Journal> journal;
//
//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    @JsonIgnoreProperties ({"user"})
//    private List<DiaryEntry> diaryEntries;
//
//    public User(String first_name, String last_name, int age) {
//        this.first_name = first_name;
//        this.last_name = last_name;
//        this.age = age;
//        this.journal = new ArrayList<>();
//        this.diaryEntries = new ArrayList<>();
//    }
//
//    public User(){}
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getFirst_name() {
//        return first_name;
//    }
//
//    public void setFirst_name(String first_name) {
//        this.first_name = first_name;
//    }
//
//    public String getLast_name() {
//        return last_name;
//    }
//
//    public void setLast_name(String last_name) {
//        this.last_name = last_name;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public List<Journal> getJournal() {
//        return journal;
//    }
//
//    public void setJournal(List<Journal> journal) {
//        this.journal = journal;
//    }
//
//    public List<DiaryEntry> getDiaryEntries() {
//        return diaryEntries;
//    }
//
//    public void setDiaryEntries(List<DiaryEntry> diaryEntries) {
//        this.diaryEntries = diaryEntries;
//    }
//
//    public void addJournalEntry(Journal journal){
//        this.journal.add(journal);
//    }
//    public void addDiaryEntry(DiaryEntry diaryEntry){
//        this.diaryEntries.add(diaryEntry);
//    }
//}
