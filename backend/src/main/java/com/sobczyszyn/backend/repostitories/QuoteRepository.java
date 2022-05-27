package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.MyQuote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuoteRepository extends JpaRepository<MyQuote, Long> {

    @Query("SELECT u FROM #{#entityName} u WHERE u.category = ?1")
    List<MyQuote> findAllByCategory(String category);

    @Query("SELECT u FROM #{#entityName} u WHERE u.category in ?1")
    List<MyQuote> findAllByCategories(List<String> categories);

    @Query("SELECT DISTINCT (u.category) FROM #{#entityName} u")
    List<String> findAllCategories();

//    @Query("SELECT u FROM #{#entityName} u WHERE u.category = ?1 order by ?2")
//    List<MyQuote> findAllByCategoryOrdered(String category, String orderColumn,String order);

//    @Query("SELECT u FROM #{#entityName} u WHERE u.category in :#{#categories} order by u.quote")
//    List<MyQuote> findAllByCategoriesOrdered(List<String> categories, String order);
}
