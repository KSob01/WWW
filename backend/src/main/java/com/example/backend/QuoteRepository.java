package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<MyQuote,Long> {
}
