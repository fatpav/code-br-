package com.codeclan.example.code_br_server_side.controllers;

import com.codeclan.example.code_br_server_side.models.Journal;
import com.codeclan.example.code_br_server_side.models.Sleep;
import com.codeclan.example.code_br_server_side.repositories.JournalEntryRepository;
import com.codeclan.example.code_br_server_side.repositories.SleepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JournalController {

    @Autowired
    JournalEntryRepository journalEntryRepository;

    @GetMapping(value = "/journal")
    public ResponseEntity<List<Journal>> findAllJournals(){
        return new ResponseEntity<>(journalEntryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/journal/{id}")
    public ResponseEntity getJournal(@PathVariable Long id){
        return new ResponseEntity(journalEntryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/journal")
    public ResponseEntity<Journal> postJournal(@RequestBody Journal journal){
        Journal newJournal = journalEntryRepository.save(journal);
        return new ResponseEntity<>(newJournal, HttpStatus.CREATED);
    }

    @PutMapping(value="/journal/{id}")
    public ResponseEntity<Journal> updateJournal(@PathVariable(value="id") Long id, @RequestBody Journal journal){
        journal.setJournal_entry(journal.getJournal_entry());
        final Journal updatedJournal = journalEntryRepository.save(journal);
        return ResponseEntity.ok(updatedJournal);
    }

    @DeleteMapping(value="/journal/{id}")
    public ResponseEntity<Long> deleteJournal(@PathVariable Long id){
        journalEntryRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
