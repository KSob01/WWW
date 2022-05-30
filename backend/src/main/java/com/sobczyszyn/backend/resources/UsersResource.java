package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyUser;
import com.sobczyszyn.backend.exceptions.MyUserNotFoundException;
import com.sobczyszyn.backend.repostitories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@RestController
@CrossOrigin(origins = "*")
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
    ResponseEntity<String> addUser(@Valid @RequestBody MyUser user) {
        repositoryUsers.save(user);
        return ResponseEntity.ok("User is valid");
    }
}
