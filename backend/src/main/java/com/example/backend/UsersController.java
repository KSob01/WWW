package com.example.backend;

import org.apache.catalina.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public class UsersController {
    private final UserRepository repositoryUsers;

    public UsersController(UserRepository repositoryUsers) {
        this.repositoryUsers = repositoryUsers;
    }

    @GetMapping("/users")
    List<MyUser> allUsers() {
        return repositoryUsers.findAll();
    }

    @GetMapping("/user/{id}")
    MyUser oneUser(@PathVariable Long id) {
        return repositoryUsers.findById(id)
                .orElseThrow(() -> new MyUserNotFoundException(id));
    }
    @PostMapping("/users")
    ResponseEntity<String> addUser(@Valid @RequestBody User user) {
        return ResponseEntity.ok("User is valid");
    }
}
