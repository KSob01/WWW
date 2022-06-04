package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.entities.MyQuote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuoteRepository extends JpaRepository<MyQuote, Long> {

    @Query("SELECT u FROM #{#entityName} u WHERE u.category in ?1")
    List<MyQuote> findAllByCategories(List<String> categories);

    @Query("SELECT u FROM #{#entityName} u order by u.quote ASC")
    List<MyQuote> findAllASC();

    @Query("SELECT u FROM #{#entityName} u order by u.quote DESC ")
    List<MyQuote> findAllDESC();

    @Query("SELECT DISTINCT (u.category) FROM #{#entityName} u")
    List<String> findAllCategories();

    @Query("SELECT u FROM #{#entityName} u WHERE u.category in ?1 order by u.quote ASC")
    List<MyQuote> findAllByCategoriesASC(List<String> category);

    @Query("SELECT u FROM #{#entityName} u WHERE u.category in ?1 order by u.quote DESC")
    List<MyQuote> findAllByCategoriesDESC(List<String> categories);


}
