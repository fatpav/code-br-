package com.codeclan.example.code_br_server_side.controllers;

import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.models.Sleep;
import com.codeclan.example.code_br_server_side.repositories.SleepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SleepController {

    @Autowired
    SleepRepository sleepRepository;

    @GetMapping(value = "/sleep")
    public ResponseEntity<List<Sleep>> findAllSleeps(){
        return new ResponseEntity<>(sleepRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/sleep/{id}")
    public ResponseEntity getSleep(@PathVariable Long id){
        return new ResponseEntity(sleepRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/sleep")
    public ResponseEntity<Sleep> postSleep(@RequestBody Sleep sleep){
        Sleep newSleep = sleepRepository.save(sleep);
        return new ResponseEntity<>(newSleep, HttpStatus.CREATED);
    }

    @PutMapping(value="/sleep/{id}")
    public ResponseEntity<Sleep> updateSleep(@PathVariable(value="id") Long id, @RequestBody Sleep sleep){
        sleep.setHours(sleep.getHours());
        final Sleep updatedSleep = sleepRepository.save(sleep);
        return ResponseEntity.ok(updatedSleep);
    }
}
