package com.codeclan.example.code_br_server_side.controllers;


import com.codeclan.example.code_br_server_side.models.DiaryEntry;
import com.codeclan.example.code_br_server_side.models.WaterIntake;
import com.codeclan.example.code_br_server_side.repositories.DiaryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiaryEntryController {

    @Autowired
    DiaryEntryRepository diaryEntryRepository;

    @GetMapping(value="/diaryentry")
    public ResponseEntity<List<DiaryEntry>> findAllDiaryEntries(){
        return new ResponseEntity<>(diaryEntryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/diaryentry/{id}")
    public ResponseEntity getDiaryEntry(@PathVariable Long id){
        return new ResponseEntity(diaryEntryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/diaryentry")
    public ResponseEntity<DiaryEntry> postDiaryEntry(@RequestBody DiaryEntry diaryEntry){
        DiaryEntry newDiaryEntry = diaryEntryRepository.save(diaryEntry);
        return new ResponseEntity<>(newDiaryEntry, HttpStatus.CREATED);
    }

    @PutMapping(value="/diaryentry/{id}")
    public ResponseEntity<DiaryEntry> updateDiaryEntry(@PathVariable(value="id") Long id, @RequestBody DiaryEntry diaryEntry){
        diaryEntry.setDate(diaryEntry.getDate());
        final DiaryEntry updatedDiaryEntry = diaryEntryRepository.save(diaryEntry);
        return ResponseEntity.ok(updatedDiaryEntry);
    }

}
