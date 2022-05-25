package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.MyQuote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuoteRepository extends JpaRepository<MyQuote,Long> {
    @Query("SELECT u FROM #{#entityName} u WHERE u.category = :#{#cat}")
    List<MyQuote> findAllByCategory(@Param("cat")String cat);
}
