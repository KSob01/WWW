package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<MyUser,Long> {
}
