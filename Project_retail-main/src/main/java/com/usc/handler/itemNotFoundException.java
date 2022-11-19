package com.usc.handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class itemNotFoundException extends RuntimeException {

	public itemNotFoundException(String message) {
		super(message);
	}

}
