package dev.scraping.resources;

import com.codahale.metrics.annotation.Timed;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import dev.scraping.entities.Payload;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Path("/words")
@Produces(MediaType.APPLICATION_JSON)
public class WordsResource {
    private final Map<String, Integer> words = Collections.synchronizedMap(new HashMap<>());

    @GET
    @Timed
    public Response words() {
        var response = new JsonArray();
        words.entrySet().stream().forEach(entry -> {
            var json = new JsonObject();
            json.addProperty("word", entry.getKey());
            json.addProperty("count", entry.getValue());
            response.add(json);
        });

        return Response.ok(response.toString()).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Timed
    public Response addWord(Payload payload) {
        for (String word : payload.getWords()) {
            words.put(word.toLowerCase(), words.getOrDefault(word.toLowerCase(), 0) + 1);
        }

        return Response.noContent().build();
    }
}
