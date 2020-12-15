package com.codeclan.example.code_br_server_side.controllers;


import com.codeclan.example.code_br_server_side.models.Breathing;
import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.repositories.BreathingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BreathingController {

    @Autowired
    BreathingRepository breathingRepository;

    @GetMapping(value = "/breathe")
    public ResponseEntity<List<Breathing>> findAllBreathings(){
        return new ResponseEntity<>(breathingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/breathe/{id}")
    public ResponseEntity getBreathing(@PathVariable Long id){
        return new ResponseEntity(breathingRepository.findById(id), HttpStatus.OK);

    }

    @PostMapping(value = "/breathe")
    public ResponseEntity<Breathing> postBreathing(@RequestBody Breathing breathing){
        Breathing newBreathing  = breathingRepository.save(breathing);
        return new ResponseEntity<>(newBreathing, HttpStatus.CREATED);

    }

    @PutMapping(value="/breathe/{id}")
    public ResponseEntity<Breathing> updateBreathing(@PathVariable(value="id") Long id, @RequestBody Breathing breathing){
        breathing.setMinutes(breathing.getMinutes());
        final Breathing updatedBreathing = breathingRepository.save(breathing);
        return ResponseEntity.ok(updatedBreathing);
    }

    @DeleteMapping(value="/breathe/{id}")
    public ResponseEntity<Long> deleteBreathing(@PathVariable Long id){
        breathingRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
