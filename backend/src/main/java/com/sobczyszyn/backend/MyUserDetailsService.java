package com.sobczyszyn.backend;

import com.sobczyszyn.backend.entities.MyUser;
import com.sobczyszyn.backend.exceptions.MyUserAlreadyExistsException;
import com.sobczyszyn.backend.exceptions.MyUserNotFoundException;
import com.sobczyszyn.backend.repostitories.UserRepository;
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
    public MyUser getUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new MyUserNotFoundException(id));
    }

    @Transactional
    public String addUser(MyUser user) {
        if (userRepository.findMyUserByLogin(user.getLogin()).isEmpty()) {
            userRepository.save(user);
        } else {
            throw new MyUserAlreadyExistsException();
        }
        return"User is valid";
    }

    @Transactional
    public String logUser() {
        return "User is authenticated";
    }
}
