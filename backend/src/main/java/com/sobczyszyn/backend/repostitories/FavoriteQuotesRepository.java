package com.sobczyszyn.backend.repostitories;

import com.sobczyszyn.backend.entities.FavoriteQuotes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteQuotesRepository extends JpaRepository<FavoriteQuotes,Long> {
}
