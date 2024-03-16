package com.example.todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {

    @GetMapping("")
    public String onInit() {
        System.out.println("----------");
        System.out.println("Application Started...");
        System.out.println("----------");
        return "index.html";
    }
}
