package com.codeclan.example.code_br_server_side.components;

import com.codeclan.example.code_br_server_side.models.*;
import com.codeclan.example.code_br_server_side.repositories.*;
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
    @Autowired
    BreathingRepository breathingRepository;
    @Autowired
    SleepRepository sleepRepository;
    @Autowired
    MeditationRepository meditationRepository;
    @Autowired
    ScreenTimeRepository screenTimeRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){
        User user1 = new User("Json", "Jsonson", 33);
        userRepository.save(user1);


        DiaryEntry entry1 = new DiaryEntry("12/12/20");
        diaryEntryRepository.save(entry1);
        DiaryEntry entry2 = new DiaryEntry("13/12/20");
        diaryEntryRepository.save(entry2);
        DiaryEntry entry3 = new DiaryEntry("14/12/20");
        diaryEntryRepository.save(entry3);
        DiaryEntry entry4 = new DiaryEntry("15/12/20");
        diaryEntryRepository.save(entry4);

        Sleep sleepTest1 = new Sleep(8);
        sleepRepository.save(sleepTest1);
        Sleep sleepTest2 = new Sleep(7);
        sleepRepository.save(sleepTest2);
        Sleep sleepTest3 = new Sleep(6);
        sleepRepository.save(sleepTest3);
        Sleep sleepTest4 = new Sleep(4);
        sleepRepository.save(sleepTest4);

        ScreenTime screenTime1 = new ScreenTime(8);
        screenTimeRepository.save(screenTime1);
        ScreenTime screenTime2 = new ScreenTime(2);
        screenTimeRepository.save(screenTime2);
        ScreenTime screenTime3 = new ScreenTime(12);
        screenTimeRepository.save(screenTime3);
        ScreenTime screenTime4 = new ScreenTime(10);
        screenTimeRepository.save(screenTime4);

        Meditation med1 = new Meditation(30);
        Meditation med2 = new Meditation(15);
        Meditation med3 = new Meditation(10);
        meditationRepository.save(med1);
        meditationRepository.save(med2);
        meditationRepository.save(med3);

    }


}
