package com.codeclan.example.code_br_server_side.components;

import com.codeclan.example.code_br_server_side.models.*;
import com.codeclan.example.code_br_server_side.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

//    @Autowired
//    UserRepository userRepository;
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
    @Autowired
    WaterIntakeRepository waterIntakeRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){
//        User user1 = new User("Json", "Jsonson", 33);
//        userRepository.save(user1);


        DiaryEntry entry1 = new DiaryEntry("01/12/20");
        diaryEntryRepository.save(entry1);

        Breathing breathe1 = new Breathing(10, entry1);
        breathingRepository.save(breathe1);
        entry1.setBreathing(breathe1);

        Sleep sleepTest1 = new Sleep(8, entry1);
        sleepRepository.save(sleepTest1);
        entry1.setSleep(sleepTest1);

        Meditation med1 = new Meditation(10, entry1);
        meditationRepository.save(med1);
        entry1.setMeditation(med1);

        ScreenTime screenTime1 = new ScreenTime(8, entry1);
        screenTimeRepository.save(screenTime1);
        entry1.setScreenTime(screenTime1);

        WaterIntake water1 = new WaterIntake(1.5, entry1);
        waterIntakeRepository.save(water1);
        entry1.setWaterIntake(water1);

        Journal journal1 = new Journal("Today was a good day", entry1);
        journalEntryRepository.save(journal1);
        entry1.setJournal(journal1);

        diaryEntryRepository.save(entry1);

        //2

        DiaryEntry entry2 = new DiaryEntry("02/12/20");
        diaryEntryRepository.save(entry2);

        Breathing breathe2 = new Breathing(20, entry2);
        breathingRepository.save(breathe2);
        entry2.setBreathing(breathe2);

        Sleep sleepTest2 = new Sleep(6, entry2);
        sleepRepository.save(sleepTest2);
        entry2.setSleep(sleepTest2);

        Meditation med2 = new Meditation(30, entry2);
        meditationRepository.save(med2);
        entry2.setMeditation(med2);

        ScreenTime screenTime2 = new ScreenTime(9, entry2);
        screenTimeRepository.save(screenTime2);
        entry2.setScreenTime(screenTime2);

        WaterIntake water2 = new WaterIntake(0.5, entry2);
        waterIntakeRepository.save(water2);
        entry2.setWaterIntake(water2);

        Journal journal2 = new Journal("Today was a bad day", entry2);
        journalEntryRepository.save(journal2);
        entry2.setJournal(journal2);

        diaryEntryRepository.save(entry2);

        //3

        DiaryEntry entry3 = new DiaryEntry("03/12/20");
        diaryEntryRepository.save(entry3);

        Breathing breathe3 = new Breathing(15, entry3);
        breathingRepository.save(breathe3);
        entry3.setBreathing(breathe3);

        Sleep sleepTest3 = new Sleep(6, entry3);
        sleepRepository.save(sleepTest3);
        entry3.setSleep(sleepTest3);

        Meditation med3 = new Meditation(10, entry3);
        meditationRepository.save(med3);
        entry3.setMeditation(med3);

        ScreenTime screenTime3 = new ScreenTime(6, entry3);
        screenTimeRepository.save(screenTime3);
        entry3.setScreenTime(screenTime3);

        WaterIntake water3 = new WaterIntake(2.5, entry3);
        waterIntakeRepository.save(water3);
        entry3.setWaterIntake(water3);

        Journal journal3 = new Journal("Today was a rough day", entry3);
        journalEntryRepository.save(journal3);
        entry3.setJournal(journal3);

        diaryEntryRepository.save(entry3);

        //4

        DiaryEntry entry4 = new DiaryEntry("04/12/20");
        diaryEntryRepository.save(entry4);

        Breathing breathe4 = new Breathing(10, entry4);
        breathingRepository.save(breathe4);
        entry4.setBreathing(breathe4);

        Sleep sleepTest4 = new Sleep(4, entry4);
        sleepRepository.save(sleepTest4);
        entry4.setSleep(sleepTest4);

        Meditation med4 = new Meditation(20, entry4);
        meditationRepository.save(med4);
        entry4.setMeditation(med4);

        ScreenTime screenTime4 = new ScreenTime(8, entry4);
        screenTimeRepository.save(screenTime4);
        entry4.setScreenTime(screenTime4);

        WaterIntake water4 = new WaterIntake(0.5, entry4);
        waterIntakeRepository.save(water4);
        entry4.setWaterIntake(water4);

        Journal journal4 = new Journal("Today was ace", entry4);
        journalEntryRepository.save(journal4);
        entry4.setJournal(journal4);

        diaryEntryRepository.save(entry4);

        //5

        DiaryEntry entry5 = new DiaryEntry("05/12/20");
        diaryEntryRepository.save(entry5);

        Breathing breathe5 = new Breathing(15, entry5);
        breathingRepository.save(breathe5);
        entry5.setBreathing(breathe5);

        Sleep sleepTest5 = new Sleep(9, entry5);
        sleepRepository.save(sleepTest5);
        entry5.setSleep(sleepTest5);

        Meditation med5 = new Meditation(5, entry5);
        meditationRepository.save(med5);
        entry5.setMeditation(med5);

        ScreenTime screenTime5 = new ScreenTime(4, entry5);
        screenTimeRepository.save(screenTime5);
        entry5.setScreenTime(screenTime5);

        WaterIntake water5 = new WaterIntake(3.5, entry5);
        waterIntakeRepository.save(water5);
        entry5.setWaterIntake(water5);

        Journal journal5 = new Journal("Today was a bad day", entry5);
        journalEntryRepository.save(journal5);
        entry5.setJournal(journal5);

        diaryEntryRepository.save(entry5);

        //6

        DiaryEntry entry6 = new DiaryEntry("06/12/20");
        diaryEntryRepository.save(entry6);

        Breathing breathe6 = new Breathing(0, entry6);
        breathingRepository.save(breathe6);
        entry6.setBreathing(breathe6);

        Sleep sleepTest6 = new Sleep(6, entry6);
        sleepRepository.save(sleepTest6);
        entry6.setSleep(sleepTest6);

        Meditation med6 = new Meditation(20, entry6);
        meditationRepository.save(med6);
        entry6.setMeditation(med6);

        ScreenTime screenTime6 = new ScreenTime(10, entry6);
        screenTimeRepository.save(screenTime6);
        entry6.setScreenTime(screenTime6);

        WaterIntake water6 = new WaterIntake(1.5, entry6);
        waterIntakeRepository.save(water6);
        entry6.setWaterIntake(water6);

        Journal journal6 = new Journal("Today was a superb day but too much screen-time", entry6);
        journalEntryRepository.save(journal6);
        entry6.setJournal(journal6);

        diaryEntryRepository.save(entry6);

        //7

        DiaryEntry entry7 = new DiaryEntry("07/12/20");
        diaryEntryRepository.save(entry7);

        Breathing breathe7 = new Breathing(22, entry7);
        breathingRepository.save(breathe7);
        entry7.setBreathing(breathe7);

        Sleep sleepTest7 = new Sleep(8, entry7);
        sleepRepository.save(sleepTest7);
        entry7.setSleep(sleepTest7);

        Meditation med7 = new Meditation(0, entry7);
        meditationRepository.save(med7);
        entry7.setMeditation(med7);

        ScreenTime screenTime7 = new ScreenTime(7, entry7);
        screenTimeRepository.save(screenTime7);
        entry7.setScreenTime(screenTime7);

        WaterIntake water7 = new WaterIntake(2.0, entry7);
        waterIntakeRepository.save(water7);
        entry7.setWaterIntake(water7);

        Journal journal7 = new Journal("Today was a bad day", entry7);
        journalEntryRepository.save(journal7);
        entry7.setJournal(journal7);

        diaryEntryRepository.save(entry7);

        //8

        DiaryEntry entry8 = new DiaryEntry("08/12/20");
        diaryEntryRepository.save(entry8);

        Breathing breathe8 = new Breathing(5, entry8);
        breathingRepository.save(breathe8);
        entry8.setBreathing(breathe8);

        Sleep sleepTest8 = new Sleep(6, entry8);
        sleepRepository.save(sleepTest8);
        entry8.setSleep(sleepTest8);

        Meditation med8 = new Meditation(10, entry8);
        meditationRepository.save(med8);
        entry8.setMeditation(med8);

        ScreenTime screenTime8 = new ScreenTime(9, entry8);
        screenTimeRepository.save(screenTime8);
        entry8.setScreenTime(screenTime8);

        WaterIntake water8 = new WaterIntake(1.0, entry8);
        waterIntakeRepository.save(water8);
        entry8.setWaterIntake(water8);

        Journal journal8 = new Journal("Today I didn't have much to eat", entry8);
        journalEntryRepository.save(journal8);
        entry8.setJournal(journal8);

        diaryEntryRepository.save(entry8);

        //9

        DiaryEntry entry9 = new DiaryEntry("09/12/20");
        diaryEntryRepository.save(entry9);

        Breathing breathe9 = new Breathing(18, entry9);
        breathingRepository.save(breathe9);
        entry9.setBreathing(breathe9);

        Sleep sleepTest9 = new Sleep(8, entry9);
        sleepRepository.save(sleepTest9);
        entry9.setSleep(sleepTest9);

        Meditation med9 = new Meditation(20, entry9);
        meditationRepository.save(med9);
        entry9.setMeditation(med9);

        ScreenTime screenTime9 = new ScreenTime(5, entry9);
        screenTimeRepository.save(screenTime9);
        entry9.setScreenTime(screenTime9);

        WaterIntake water9 = new WaterIntake(2.25, entry9);
        waterIntakeRepository.save(water9);
        entry9.setWaterIntake(water9);

        Journal journal9 = new Journal("Today I learned how to use React", entry9);
        journalEntryRepository.save(journal9);
        entry9.setJournal(journal9);

        diaryEntryRepository.save(entry9);

        //10

        DiaryEntry entry10 = new DiaryEntry("10/12/20");
        diaryEntryRepository.save(entry10);

        Breathing breathe10 = new Breathing(5, entry10);
        breathingRepository.save(breathe10);
        entry10.setBreathing(breathe10);

        Sleep sleepTest10 = new Sleep(6, entry10);
        sleepRepository.save(sleepTest10);
        entry10.setSleep(sleepTest10);

        Meditation med10 = new Meditation(25, entry10);
        meditationRepository.save(med10);
        entry10.setMeditation(med10);

        ScreenTime screenTime10 = new ScreenTime(8, entry10);
        screenTimeRepository.save(screenTime10);
        entry10.setScreenTime(screenTime10);

        WaterIntake water10 = new WaterIntake(1.75, entry10);
        waterIntakeRepository.save(water10);
        entry10.setWaterIntake(water10);

        Journal journal10 = new Journal("Today I learned how to do TDD", entry10);
        journalEntryRepository.save(journal10);
        entry10.setJournal(journal10);

        diaryEntryRepository.save(entry10);


        //11

        DiaryEntry entry11 = new DiaryEntry("11/12/20");
        diaryEntryRepository.save(entry11);

        Breathing breathe11 = new Breathing(12, entry11);
        breathingRepository.save(breathe11);
        entry11.setBreathing(breathe11);

        Sleep sleepTest11 = new Sleep(4, entry11);
        sleepRepository.save(sleepTest11);
        entry11.setSleep(sleepTest11);

        Meditation med11 = new Meditation(0, entry11);
        meditationRepository.save(med11);
        entry11.setMeditation(med11);

        ScreenTime screenTime11 = new ScreenTime(10, entry11);
        screenTimeRepository.save(screenTime11);
        entry11.setScreenTime(screenTime11);

        WaterIntake water11 = new WaterIntake(1.25, entry11);
        waterIntakeRepository.save(water11);
        entry11.setWaterIntake(water11);

        Journal journal11 = new Journal("Today was confusing but fun", entry11);
        journalEntryRepository.save(journal11);
        entry11.setJournal(journal11);

        diaryEntryRepository.save(entry11);

        //12

        DiaryEntry entry12 = new DiaryEntry("12/12/20");
        diaryEntryRepository.save(entry12);

        Breathing breathe12 = new Breathing(5, entry12);
        breathingRepository.save(breathe12);
        entry12.setBreathing(breathe12);

        Sleep sleepTest12 = new Sleep(9, entry12);
        sleepRepository.save(sleepTest12);
        entry12.setSleep(sleepTest12);

        Meditation med12 = new Meditation(10, entry12);
        meditationRepository.save(med12);
        entry12.setMeditation(med12);

        ScreenTime screenTime12 = new ScreenTime(2, entry12);
        screenTimeRepository.save(screenTime12);
        entry12.setScreenTime(screenTime12);

        WaterIntake water12 = new WaterIntake(2.25, entry12);
        waterIntakeRepository.save(water12);
        entry12.setWaterIntake(water12);

        Journal journal12 = new Journal("Today was a beauty", entry12);
        journalEntryRepository.save(journal12);
        entry12.setJournal(journal12);

        diaryEntryRepository.save(entry12);

        //13

        DiaryEntry entry13 = new DiaryEntry("13/12/20");
        diaryEntryRepository.save(entry13);

        Breathing breathe13 = new Breathing(25, entry13);
        breathingRepository.save(breathe13);
        entry13.setBreathing(breathe13);

        Sleep sleepTest13 = new Sleep(9, entry13);
        sleepRepository.save(sleepTest13);
        entry13.setSleep(sleepTest13);

        Meditation med13 = new Meditation(20, entry13);
        meditationRepository.save(med13);
        entry13.setMeditation(med13);

        ScreenTime screenTime13 = new ScreenTime(5, entry13);
        screenTimeRepository.save(screenTime13);
        entry13.setScreenTime(screenTime13);

        WaterIntake water13 = new WaterIntake(1.25, entry13);
        waterIntakeRepository.save(water13);
        entry13.setWaterIntake(water13);

        Journal journal13 = new Journal("Today I kicked back-end ass", entry13);
        journalEntryRepository.save(journal13);
        entry13.setJournal(journal13);

        diaryEntryRepository.save(entry13);

        //14

        DiaryEntry entry14 = new DiaryEntry("14/12/20");
        diaryEntryRepository.save(entry14);

        Breathing breathe14 = new Breathing(0, entry14);
        breathingRepository.save(breathe14);
        entry14.setBreathing(breathe14);

        Sleep sleepTest14 = new Sleep(6, entry14);
        sleepRepository.save(sleepTest14);
        entry14.setSleep(sleepTest14);

        Meditation med14 = new Meditation(10, entry14);
        meditationRepository.save(med14);
        entry14.setMeditation(med14);

        ScreenTime screenTime14 = new ScreenTime(8, entry14);
        screenTimeRepository.save(screenTime14);
        entry14.setScreenTime(screenTime14);

        WaterIntake water14 = new WaterIntake(2.25, entry14);
        waterIntakeRepository.save(water14);
        entry14.setWaterIntake(water14);

        Journal journal14 = new Journal("Today broke me", entry14);
        journalEntryRepository.save(journal14);
        entry14.setJournal(journal14);

        diaryEntryRepository.save(entry14);

        //15

        DiaryEntry entry15 = new DiaryEntry("15/12/20");
        diaryEntryRepository.save(entry15);

        Breathing breathe15 = new Breathing(10, entry15);
        breathingRepository.save(breathe15);
        entry15.setBreathing(breathe15);

        Sleep sleepTest15 = new Sleep(6, entry15);
        sleepRepository.save(sleepTest15);
        entry15.setSleep(sleepTest15);

        Meditation med15 = new Meditation(10, entry15);
        meditationRepository.save(med15);
        entry15.setMeditation(med15);

        ScreenTime screenTime15 = new ScreenTime(9, entry15);
        screenTimeRepository.save(screenTime15);
        entry15.setScreenTime(screenTime15);

        WaterIntake water15 = new WaterIntake(2.0, entry15);
        waterIntakeRepository.save(water15);
        entry15.setWaterIntake(water15);

        Journal journal15 = new Journal("Too much screen time", entry15);
        journalEntryRepository.save(journal15);
        entry15.setJournal(journal15);

        diaryEntryRepository.save(entry15);

        //16

//        DiaryEntry entry16 = new DiaryEntry("16/12/20");
//        diaryEntryRepository.save(entry16);
//
//        Breathing breathe16 = new Breathing(8, entry16);
//        breathingRepository.save(breathe16);
//        entry16.setBreathing(breathe16);
//
//        Sleep sleepTest16 = new Sleep(5, entry16);
//        sleepRepository.save(sleepTest16);
//        entry16.setSleep(sleepTest16);
//
//        Meditation med16 = new Meditation(0, entry16);
//        meditationRepository.save(med16);
//        entry16.setMeditation(med16);
//
//        ScreenTime screenTime16 = new ScreenTime(10, entry16);
//        screenTimeRepository.save(screenTime16);
//        entry16.setScreenTime(screenTime16);
//
//        WaterIntake water16 = new WaterIntake(1.75, entry16);
//        waterIntakeRepository.save(water16);
//        entry16.setWaterIntake(water16);
//
//        Journal journal16 = new Journal("Today was a bad day but I am happy", entry16);
//        journalEntryRepository.save(journal16);
//        entry16.setJournal(journal16);
//
//        diaryEntryRepository.save(entry16);

        //17

//        DiaryEntry entry17 = new DiaryEntry("17/12/20");
//        diaryEntryRepository.save(entry17);
//
//        Breathing breathe17 = new Breathing(16, entry17);
//        breathingRepository.save(breathe17);
//        entry17.setBreathing(breathe17);
//
//        Sleep sleepTest17 = new Sleep(4, entry17);
//        sleepRepository.save(sleepTest17);
//        entry17.setSleep(sleepTest17);
//
//        Meditation med17 = new Meditation(10, entry17);
//        meditationRepository.save(med17);
//        entry17.setMeditation(med17);
//
//        ScreenTime screenTime17 = new ScreenTime(11, entry17);
//        screenTimeRepository.save(screenTime17);
//        entry17.setScreenTime(screenTime17);
//
//        WaterIntake water17 = new WaterIntake(0.75, entry17);
//        waterIntakeRepository.save(water17);
//        entry17.setWaterIntake(water17);
//
//        Journal journal17 = new Journal("Today was just another day", entry17);
//        journalEntryRepository.save(journal17);
//        entry17.setJournal(journal17);
//
//        diaryEntryRepository.save(entry17);

        //18

//        DiaryEntry entry18 = new DiaryEntry("18/12/20");
//        diaryEntryRepository.save(entry18);
//
//        Breathing breathe18 = new Breathing(6, entry18);
//        breathingRepository.save(breathe18);
//        entry18.setBreathing(breathe18);
//
//        Sleep sleepTest18 = new Sleep(6, entry18);
//        sleepRepository.save(sleepTest18);
//        entry18.setSleep(sleepTest18);
//
//        Meditation med18 = new Meditation(20, entry18);
//        meditationRepository.save(med18);
//        entry18.setMeditation(med18);
//
//        ScreenTime screenTime18 = new ScreenTime(8, entry18);
//        screenTimeRepository.save(screenTime18);
//        entry18.setScreenTime(screenTime18);
//
//        WaterIntake water18 = new WaterIntake(1.75, entry18);
//        waterIntakeRepository.save(water18);
//        entry18.setWaterIntake(water18);
//
//        Journal journal18 = new Journal("Today was a great day", entry18);
//        journalEntryRepository.save(journal18);
//        entry18.setJournal(journal18);
//
//        diaryEntryRepository.save(entry18);



    }


}
