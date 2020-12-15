package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.ScreenTime;
import com.codeclan.example.code_br_server_side.models.Sleep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SleepRepository extends JpaRepository<Sleep, Long> {

    List<Sleep> findAll();
    List<Sleep> findById(long id);

}
