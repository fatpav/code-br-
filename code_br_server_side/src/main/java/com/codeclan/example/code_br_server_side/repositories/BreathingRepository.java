package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.Breathing;
import com.codeclan.example.code_br_server_side.models.WaterIntake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreathingRepository extends JpaRepository <Breathing, Long> {

    List<Breathing> findAll();
    List<Breathing> findById(long id);

}
