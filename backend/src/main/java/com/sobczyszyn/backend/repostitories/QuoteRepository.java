package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.MyQuote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuoteRepository extends JpaRepository<MyQuote,Long> {

    @Query("SELECT u FROM #{#entityName} u WHERE u.category = :#{#category}")
    List<MyQuote> findAllByCategory(String category);

    @Query("SELECT u FROM #{#entityName} u WHERE u.category in :#{#categories}")
    List<MyQuote> findAllByCategories(List<String> categories);
}
