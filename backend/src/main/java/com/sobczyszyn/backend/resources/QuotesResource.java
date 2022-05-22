package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyQuote;
import com.sobczyszyn.backend.exceptions.MyQuoteNotFoundException;
import com.sobczyszyn.backend.repostitories.QuoteRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuotesResource {
    private final QuoteRepository repositoryQuotes;

    public QuotesResource(QuoteRepository repositoryQuotes) {
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
