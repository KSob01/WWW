package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuotesController {
    private final QuoteRepository repository;

    public QuotesController(QuoteRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/quotes")
    List<MyQuote> all() {
        return repository.findAll();
    }

    @GetMapping("/quote/{id}")
    MyQuote one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new MyQuoteNotFoundException(id));
    }
}
