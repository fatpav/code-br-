package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.Meditation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeditationRepository extends JpaRepository <Meditation, Long> {

}
