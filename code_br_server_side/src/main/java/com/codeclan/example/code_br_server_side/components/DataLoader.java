package com.codeclan.example.code_br_server_side.components;

import com.codeclan.example.code_br_server_side.models.User;
import com.codeclan.example.code_br_server_side.repositories.DiaryEntryRepository;
import com.codeclan.example.code_br_server_side.repositories.JournalEntryRepository;
import com.codeclan.example.code_br_server_side.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JournalEntryRepository journalEntryRepository;

    @Autowired
    DiaryEntryRepository diaryEntryRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){
        User user1 = new User("Json", "Jsonson", 33);
        userRepository.save(user1);
    }

}
