package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

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
        this.userRepository.save(new MyUser("Kate","Sob"));
        InputStream is = getClass().getClassLoader().getResourceAsStream("my_quotes.csv");
        List<MyQuote> l = QuoteHelper.csvToQuotes(is);
        for(MyQuote quote : l){
            this.quoteRepository.save(new MyQuote(quote.getQuote(),quote.getAuthor(),quote.getCategory()));
        }

    }
}
