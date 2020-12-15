package com.codeclan.example.code_br_server_side.controllers;


import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.repositories.MeditationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MeditationController {

    @Autowired
    MeditationRepository meditationRepository;

    @GetMapping(value= "/meditate")
    public ResponseEntity<List<Meditation>> findAllMeditations(){
        return new ResponseEntity<>(meditationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/meditate/{id}")
    public ResponseEntity getMeditation(@PathVariable Long id){
        return new ResponseEntity(meditationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/meditate")
    public ResponseEntity<Meditation> postMeditation(@RequestBody Meditation meditation){
        Meditation newMeditation = meditationRepository.save(meditation);
        return new ResponseEntity<>(newMeditation, HttpStatus.CREATED);
    }

    @PutMapping(value="/meditate/{id}")
    public ResponseEntity<Meditation> updateMeditation(@PathVariable(value="id") Long id, @RequestBody Meditation meditation){
        meditation.setMinutes(meditation.getMinutes());
        final Meditation updatedMeditation = meditationRepository.save(meditation);
        return ResponseEntity.ok(updatedMeditation);
    }

    @DeleteMapping(value="/meditation/{id}")
    public ResponseEntity<Long> deleteMeditation(@PathVariable Long id){
        meditationRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
