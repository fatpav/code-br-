package com.codeclan.example.code_br_server_side.controllers;

import com.codeclan.example.code_br_server_side.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;
}
