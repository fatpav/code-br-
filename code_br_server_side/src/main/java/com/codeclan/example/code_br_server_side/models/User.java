package com.codeclan.example.code_br_server_side.models;

import javax.persistence.Entity;

@Entity
public class User {

    private Long id;
    private String first_name;
    private String last_name;
    private int age;
}
