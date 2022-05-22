package com.sobczyszyn.backend.exceptions;

public class MyUserNotFoundException extends RuntimeException {
    public MyUserNotFoundException(Long id) {
            super("Could not find user: " + id);
    }
}
