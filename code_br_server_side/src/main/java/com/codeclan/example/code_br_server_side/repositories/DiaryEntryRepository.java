package com.codeclan.example.code_br_server_side.repositories;

import com.codeclan.example.code_br_server_side.models.DiaryEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiaryEntryRepository extends JpaRepository <DiaryEntry, Long> {

    List<DiaryEntry> findAll();
    List<DiaryEntry> findById(long id);

}
