package com.sobczyszyn.backend;

import com.sobczyszyn.backend.exceptions.MyUserNotFoundException;
import com.sobczyszyn.backend.repostitories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public MyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        List<MyUser> user = userRepository.findMyUserByLogin(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        return new MyUserPrincipal(user.get(0));
    }
    @Transactional
    public  MyUser getUser(Long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new MyUserNotFoundException(id));
    }
    @Transactional
    public ResponseEntity<String> addUser(MyUser user){
        try {
            userRepository.save(user);
        }catch (RuntimeException e){
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.ok("User is valid");
    }
    @Transactional
    public ResponseEntity<String> logUser(){
        return ResponseEntity.ok("User is authenticated");
    }
}
