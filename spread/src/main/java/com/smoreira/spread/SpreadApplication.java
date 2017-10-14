package com.smoreira.spread;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication
public class SpreadApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpreadApplication.class, args);
	}
}
