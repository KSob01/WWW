package com.sobczyszyn.backend.exceptions;

public class MyQuoteNotFoundException extends RuntimeException {
    public MyQuoteNotFoundException(Long id){
         super("Could not find quote: " + id);
     }
}
