package com.example.backend;

import org.springframework.data.repository.CrudRepository;

public interface QuoteRepository extends CrudRepository<MyQuote, Long> {
}
