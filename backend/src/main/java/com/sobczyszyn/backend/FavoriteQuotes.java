package com.sobczyszyn.backend;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;
import java.util.Objects;


@Entity
public class FavoriteQuotes {
    private @Id
    @GeneratedValue
    Long id;
    private Long userId;
    @ElementCollection
    private List<Long> quotesId;

    public FavoriteQuotes() {
    }

    public FavoriteQuotes(Long userId, List<Long> quotesId) {
        this.userId = userId;
        this.quotesId = quotesId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Long> getQuotesId() {
        return quotesId;
    }

    public void setQuotesId(List<Long> quotesId) {
        this.quotesId = quotesId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FavoriteQuotes that = (FavoriteQuotes) o;
        return Objects.equals(id, that.id) && Objects.equals(userId, that.userId) && Objects.equals(quotesId, that.quotesId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, quotesId);
    }
}
