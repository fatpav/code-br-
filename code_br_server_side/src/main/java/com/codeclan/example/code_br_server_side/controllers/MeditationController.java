package com.codeclan.example.code_br_server_side.controllers;


import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.repositories.MeditationRepository;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

}
