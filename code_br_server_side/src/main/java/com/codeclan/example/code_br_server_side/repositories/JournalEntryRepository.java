package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.Journal;
import com.codeclan.example.code_br_server_side.models.Meditation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JournalEntryRepository extends JpaRepository<Journal, Long> {

    List<Journal> findAll();
    List<Journal> findById(long id);


}
