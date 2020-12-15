package com.codeclan.example.code_br_server_side;

import com.codeclan.example.code_br_server_side.models.Meditation;
import com.codeclan.example.code_br_server_side.repositories.MeditationRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest

public class MeditationControllerTest {

    @Autowired
    MeditationRepository meditationRepository;

    @Test
    public void contextLoads(){

    }

    @Test
    public void canFindAllMeditiations(){
        List<Meditation> foundMeditations = meditationRepository.findAll();
        assertEquals(18,foundMeditations.size());
    }

    @Test
    public void canFindMeditationByMinutes(){
        List<Meditation> foundMeditation = meditationRepository.findById(4L);
        assertEquals(1, foundMeditation.size());
        assertEquals(20,foundMeditation.get(0).getMinutes());
    }
}
