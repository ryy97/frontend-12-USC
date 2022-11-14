package com.usc.retailOnline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan("com.usc")
@ComponentScan("com.usc")
@EnableJpaRepositories("com.usc.dao")
@SpringBootApplication
public class RetailOnlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(RetailOnlineApplication.class, args);
	}

}
