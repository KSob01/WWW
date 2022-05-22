package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.MyQuote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<MyQuote,Long> {
}
