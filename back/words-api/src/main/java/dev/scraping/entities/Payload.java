package dev.scraping.entities;

import java.util.List;

public class Payload {
    private List<String> words;

    public Payload() {}

    public List<String> getWords() {
        return words;
    }

    public void setWords(List<String> words) {
        this.words = words;
    }
}