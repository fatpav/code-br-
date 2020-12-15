package com.codeclan.example.code_br_server_side;

import com.codeclan.example.code_br_server_side.models.DiaryEntry;
import com.codeclan.example.code_br_server_side.repositories.DiaryEntryRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest

public class DiaryEntryControllerTest {

    @Autowired
    DiaryEntryRepository diaryEntryRepository;

    @Test
    public void contextLoads(){

    }

    @Test
    public void canFindAllDiaryEntries(){
        List<DiaryEntry> foundDiaryEntries = diaryEntryRepository.findAll();
        assertEquals(18, foundDiaryEntries.size());
    }

}
