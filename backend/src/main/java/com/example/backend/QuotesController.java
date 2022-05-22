package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuotesController {
    private final QuoteRepository repositoryQuotes;

    public QuotesController(QuoteRepository repositoryQuotes) {
        this.repositoryQuotes = repositoryQuotes;
    }

    @GetMapping("/quotes")
    List<MyQuote> allQuotes() {
        return repositoryQuotes.findAll();
    }

    @GetMapping("/quote/{id}")
    MyQuote oneQuote(@PathVariable Long id) {
        return repositoryQuotes.findById(id)
                .orElseThrow(() -> new MyQuoteNotFoundException(id));
    }

}
