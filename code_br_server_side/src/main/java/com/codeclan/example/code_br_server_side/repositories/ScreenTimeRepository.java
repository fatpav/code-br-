package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.Breathing;
import com.codeclan.example.code_br_server_side.models.ScreenTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScreenTimeRepository extends JpaRepository <ScreenTime, Long> {

    List<ScreenTime> findAll();
    List<ScreenTime> findById(long id);

}
