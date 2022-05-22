package com.example.backend;

public class MyQuoteNotFoundException extends RuntimeException {
    MyQuoteNotFoundException(Long id){
         super("Could not find quote: " + id);
     }
}
