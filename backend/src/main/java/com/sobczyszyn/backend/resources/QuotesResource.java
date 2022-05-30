package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.MyQuote;
import com.sobczyszyn.backend.exceptions.MyQuoteNotFoundException;
import com.sobczyszyn.backend.repostitories.QuoteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin(origins = "*")
public class QuotesResource {
    private final QuoteRepository repositoryQuotes;

    public QuotesResource(QuoteRepository repositoryQuotes) {
        this.repositoryQuotes = repositoryQuotes;
    }

    @GetMapping("/quotes")
    List<MyQuote> allQuotes() {
        return repositoryQuotes.findAll();
    }

    @GetMapping("/quotes/ASC")
    List<MyQuote> allQuotesASC() {
        return repositoryQuotes.findAllASC();
    }

    @GetMapping("/quotes/DESC")
    List<MyQuote> allQuotesDESC() {
        return repositoryQuotes.findAllDESC();
    }


    @GetMapping("/quote/{id}")
    MyQuote oneQuote(@PathVariable Long id) {
        return repositoryQuotes.findById(id)
                .orElseThrow(() -> new MyQuoteNotFoundException(id));
    }

    @GetMapping("/quotes-by-categories/ASC")
    List<MyQuote> byCategoriesASC(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategoriesASC(categories);
    }

    @GetMapping("/quotes-by-categories/DESC")
    List<MyQuote> byCategoriesDESC(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategoriesDESC(categories);
    }

    @GetMapping("/quotes-by-categories")
    List<MyQuote> byCategories(@RequestParam(name = "cat") List<String> categories) {
        return repositoryQuotes.findAllByCategories(categories);
    }
    @GetMapping("/rand")
    List<MyQuote> randomQuote() {
        List<MyQuote> list= repositoryQuotes.findAll();
        Random rand = new Random();
        MyQuote randomElement = list.get(rand.nextInt(list.size()));
        return List.of(randomElement);
    }

    @GetMapping("/categories")
    List<String> allCategories() {
        return repositoryQuotes.findAllCategories();
    }
}
