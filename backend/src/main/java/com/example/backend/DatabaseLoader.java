package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final QuoteRepository quoteRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository,QuoteRepository quoteRepository) {
        this.userRepository = userRepository;
        this.quoteRepository = quoteRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.userRepository.save(new MyUser("Frodo", "Baggins"));
        this.quoteRepository.save(new MyQuote("Give me that ring","Frodo","film"));
        this.userRepository.save(new MyUser("Kate","Sob"));
    }
}
