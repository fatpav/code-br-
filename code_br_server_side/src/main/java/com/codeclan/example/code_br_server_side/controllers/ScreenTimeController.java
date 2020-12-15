package com.codeclan.example.code_br_server_side.controllers;

import com.codeclan.example.code_br_server_side.models.ScreenTime;
import com.codeclan.example.code_br_server_side.repositories.ScreenTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScreenTimeController {

    @Autowired
    ScreenTimeRepository screenTimeRepository;

    @GetMapping(value ="/screentime")
    public ResponseEntity<List<ScreenTime>> findAllScreenTimes(){
        return new ResponseEntity<>(screenTimeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping (value = "/screentime/{id}")
    public ResponseEntity getScreenTime(@PathVariable Long id){
        return new ResponseEntity(screenTimeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/screentime")
    public ResponseEntity<ScreenTime> postScreenTime(@RequestBody ScreenTime screenTime){
        ScreenTime newScreenTime = screenTimeRepository.save(screenTime);
        return new ResponseEntity<>(newScreenTime, HttpStatus.CREATED);
    }
}
