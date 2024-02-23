package com.hackharvard.backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Source {

    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
    
    
}
