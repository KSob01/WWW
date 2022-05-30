package com.sobczyszyn.backend.resources;

import com.sobczyszyn.backend.FavoriteQuotes;
import com.sobczyszyn.backend.MyQuote;
import com.sobczyszyn.backend.repostitories.FavoriteQuotesRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FavoriteQuotesResource {
    private final FavoriteQuotesRepository favQuotesRepository;

    public FavoriteQuotesResource(FavoriteQuotesRepository favQuotesRepository) {
        this.favQuotesRepository = favQuotesRepository;
    }

    @GetMapping("/favorites")
    List<FavoriteQuotes> allQuotes() {
        return favQuotesRepository.findAll();
    }
}
