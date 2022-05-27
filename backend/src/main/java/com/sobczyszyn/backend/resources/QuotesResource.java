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
    @GetMapping("/quotes/ASC")
    List<MyQuote> allQuotesASC() {
        return repositoryQuotes.findAllASC();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quotes/DESC")
    List<MyQuote> allQuotesDESC() {
        return repositoryQuotes.findAllDESC();
    }


    @CrossOrigin(origins = "*")
    @GetMapping("/quote/{id}")
    MyQuote oneQuote(@PathVariable Long id) {
        return repositoryQuotes.findById(id)
                .orElseThrow(() -> new MyQuoteNotFoundException(id));
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quotes-by-categories/ASC")
    List<MyQuote> byCategoriesASC(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategoriesASC(categories);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quotes-by-categories/DESC")
    List<MyQuote> byCategoriesDESC(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategoriesDESC(categories);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/quotes-by-categories")
    List<MyQuote> byCategories(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategories(categories);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/categories")
    List<String> allCategories() {
        return repositoryQuotes.findAllCategories();
    }
}
