package com.example.todo.controller;

import com.example.todo.entity.Todo;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class TodoContoller {

    @GetMapping("/todos")
    public ArrayList<Todo> getTodoList() {
        System.out.println("----------");
        System.out.println("...fetch todo list");

        ArrayList<Todo> todoList = new ArrayList<Todo>();

        todoList.add(new Todo(1, "TEST1", false));
        todoList.add(new Todo(2, "TEST2", false));
        todoList.add(new Todo(3, "TEST3", false));

        System.out.println("num of todo: " + todoList.size());
        System.out.println("----------");

        return todoList;
    }

    @ResponseBody
    @PostMapping("/todo")
    public void addTodo(@RequestBody String target) {
        System.out.println("----------");
        System.out.println("...request for add todo");
        System.out.println("requested value: " + target);
        System.out.println("----------");
    }

    @ResponseBody
    @PutMapping("/todo")
    public void editTodo(@RequestBody Todo target) {
        System.out.println("----------");
        System.out.println("...request for edit todo");
        System.out.println("requested todo ID: " + target.getId());
        System.out.println("----------");
    }

    @DeleteMapping("/todo")
    public void deleteTodo(@RequestParam(value = "id") long id) {
        System.out.println("----------");
        System.out.println("...request for delete todo");
        System.out.println("requested todo ID: " + id);
        System.out.println("----------");
    }
}
