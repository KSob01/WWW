package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyUser;
import com.sobczyszyn.backend.exceptions.MyUserNotFoundException;
import com.sobczyszyn.backend.repostitories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsersResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(UsersResource.class);
    private final UserRepository repositoryUsers;

    public UsersResource(UserRepository repositoryUsers) {
        this.repositoryUsers = repositoryUsers;
    }

    @GetMapping("/user")
    List<MyUser> allUsers() {
        LOGGER.info("allUsers");

        return repositoryUsers.findAll();
    }

    @GetMapping("/user/{id}")
    MyUser oneUser(@PathVariable Long id) {
        LOGGER.info("user. id: {}", id);

        return repositoryUsers.findById(id)
                .orElseThrow(() -> new MyUserNotFoundException(id));
    }

    @PostMapping("/users")
    ResponseEntity<String> addUser(@RequestBody MyUser user) {
        List<MyUser> myUserByLogin = repositoryUsers.findMyUserByLogin(user.getLogin());
        LOGGER.info("addUser:{}", myUserByLogin);
        try {
            repositoryUsers.save(user);
        }catch (RuntimeException e){
            LOGGER.error("Cannot save user",e);
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok("User is valid");
    }
}
