package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyUser;
import com.sobczyszyn.backend.exceptions.MyUserNotFoundException;
import com.sobczyszyn.backend.repostitories.UserRepository;
import org.apache.catalina.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public class UsersResource {
    private final UserRepository repositoryUsers;

    public UsersResource(UserRepository repositoryUsers) {
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
