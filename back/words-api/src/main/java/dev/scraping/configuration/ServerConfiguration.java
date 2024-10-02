package dev.scraping.configuration;

import io.dropwizard.core.Configuration;

public class ServerConfiguration extends Configuration {
    private String env;

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }
}
