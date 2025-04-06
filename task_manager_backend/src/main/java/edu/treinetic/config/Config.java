package edu.treinetic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;
@Configuration
public class Config {

    @Bean
    public ModelMapper getMapper(){

        return new ModelMapper();
    }
}
