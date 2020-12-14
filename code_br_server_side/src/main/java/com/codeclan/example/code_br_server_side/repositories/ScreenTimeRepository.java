package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.ScreenTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreenTimeRepository extends JpaRepository <ScreenTime, Long> {

}
