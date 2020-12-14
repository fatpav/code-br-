package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.WaterIntake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterIntakeRepository extends JpaRepository <WaterIntake, Long> {

}
