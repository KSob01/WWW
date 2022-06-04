package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.entities.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository extends JpaRepository<MyUser, Long> {
    List<MyUser> findMyUserByLogin(String login);
}
