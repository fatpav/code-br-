package com.codeclan.example.code_br_server_side.controllers;

import com.codeclan.example.code_br_server_side.models.Sleep;
import com.codeclan.example.code_br_server_side.models.WaterIntake;
import com.codeclan.example.code_br_server_side.repositories.WaterIntakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WaterIntakeController {

    @Autowired
    WaterIntakeRepository waterIntakeRepository;

    @GetMapping(value = "/waterintake")
    public ResponseEntity<List<WaterIntake>> findAllWaterIntakes(){
        return new ResponseEntity<>(waterIntakeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/waterintake/{id}")
    public ResponseEntity getWaterIntake(@PathVariable Long id){
        return new ResponseEntity(waterIntakeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/waterintake")
    public ResponseEntity<WaterIntake> postWaterIntake(@RequestBody WaterIntake waterIntake){
        WaterIntake newWaterIntake = waterIntakeRepository.save(waterIntake);
        return new ResponseEntity<>(newWaterIntake, HttpStatus.CREATED);
    }

    @PutMapping(value="/waterintake/{id}")
    public ResponseEntity<WaterIntake> updateWaterIntake(@PathVariable(value="id") Long id, @RequestBody WaterIntake waterIntake){
        waterIntake.setLitres(waterIntake.getLitres());
        final WaterIntake updatedWaterIntake = waterIntakeRepository.save(waterIntake);
        return ResponseEntity.ok(updatedWaterIntake);
    }
}
