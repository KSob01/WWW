package com.example.backend.quotes;

import com.opencsv.bean.CsvBindByName;
import java.util.Objects;


public class QuoteFromCSV {


    @CsvBindByName(column = "Id")
    Long id;
    @CsvBindByName(column = "Quote")
    private String quote;
    @CsvBindByName(column = "Author")
    private String author;
    @CsvBindByName(column = "Main Tag")
    private String category;

    public QuoteFromCSV() {
    }

    public QuoteFromCSV(Long id, String quote, String author, String category) {
        this.id = id;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuoteFromCSV that = (QuoteFromCSV) o;
        return Objects.equals(id, that.id) && Objects.equals(quote, that.quote) && Objects.equals(author, that.author) && Objects.equals(category, that.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quote, author, category);
    }

    @Override
    public String toString() {
        return "QuoteFromCSV{" +
                "id=" + id +
                ", quote='" + quote + '\'' +
                ", author='" + author + '\'' +
                ", category='" + category + '\'' +
                '}';
    }

}
