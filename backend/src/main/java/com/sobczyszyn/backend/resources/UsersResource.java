package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.entities.MyUser;
import com.sobczyszyn.backend.MyUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    public String logUser() {
        return service.logUser();
    }

    @GetMapping("/user/{id}")
    public MyUser oneUser(@PathVariable Long id) {
        return service.getUser(id);
    }


    @PostMapping("/users/register")
    public String addUser(@RequestBody MyUser user) {
        String res =  service.addUser(user);
        LOGGER.info(res.toString());
        return res;
    }
}
