package com.sobczyszyn.backend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;


@Entity
public class MyQuote {
    private @Id @GeneratedValue
    Long id;
    private String quote;
    private String author;
    private String category;


    public MyQuote() {

    }
    public MyQuote(String quote, String author, String category) {
        this.quote = quote;
        this.author = author;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "MyQuote{" +
                "id=" + id +
                ", quote='" + quote + '\'' +
                ", author='" + author + '\'' +
                ", category='" + category + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyQuote myQuote = (MyQuote) o;
        return Objects.equals(id, myQuote.id) && Objects.equals(quote, myQuote.quote) && Objects.equals(author, myQuote.author) && Objects.equals(category, myQuote.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quote, author, category);
    }
}
