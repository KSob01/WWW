package com.sobczyszyn.backend.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.sobczyszyn.backend.MyQuote;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;

import org.apache.commons.csv.CSVRecord;



public class QuoteHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERS = {"Id", "quote", "author", "tags"};

    public static List<MyQuote> csvToQuotes(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<MyQuote> myQuotes = new ArrayList<>();
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                MyQuote developerTutorial = new MyQuote(csvRecord.get(HEADERS[1]), csvRecord.get(HEADERS[2]), csvRecord.get(HEADERS[3]));
                myQuotes.add(developerTutorial);
            }

            return myQuotes;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}