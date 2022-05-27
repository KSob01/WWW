package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyQuote;
import com.sobczyszyn.backend.exceptions.MyQuoteNotFoundException;
import com.sobczyszyn.backend.repostitories.QuoteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuotesResource {
    private final QuoteRepository repositoryQuotes;

    public QuotesResource(QuoteRepository repositoryQuotes) {
        this.repositoryQuotes = repositoryQuotes;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quotes")
    List<MyQuote> allQuotes() {
        return repositoryQuotes.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quote/{id}")
    MyQuote oneQuote(@PathVariable Long id) {
        return repositoryQuotes.findById(id)
                .orElseThrow(() -> new MyQuoteNotFoundException(id));
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/quotes-by-category")
    List<MyQuote> byCategory(@RequestParam(name = "cat") String category){
        return repositoryQuotes.findAllByCategory(category);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/quotes-by-categories")
    List<MyQuote> byCategories(@RequestParam(name = "cat") List<String> categories){
        return repositoryQuotes.findAllByCategories(categories);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/categories")
    List<String> allCategories(){
        return repositoryQuotes.findAllCategories();
    }
}
