package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.models.WaterIntake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WaterIntakeRepository extends JpaRepository <WaterIntake, Long> {

    List<WaterIntake> findAll();
    List<WaterIntake> findById(long id);

}
