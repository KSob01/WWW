package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyUser;
import com.sobczyszyn.backend.MyUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsersResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(UsersResource.class);
    MyUserDetailsService service;

    public UsersResource(MyUserDetailsService service) {
        this.service = service;
    }

    @GetMapping("/user/login")
    ResponseEntity<String> logUser() {
        return service.logUser();
    }

    @GetMapping("/user/{id}")
    MyUser oneUser(@PathVariable Long id) {
        return service.getUser(id);
    }


    @PostMapping("/users/register")
    ResponseEntity<String> addUser(@RequestBody MyUser user) {
        ResponseEntity<String> res =  service.addUser(user);
        LOGGER.info(res.toString());
        return res;
    }
}
