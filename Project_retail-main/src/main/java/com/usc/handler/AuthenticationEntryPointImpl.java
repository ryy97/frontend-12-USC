package com.usc.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.usc.security.SecurityUtils;

@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) 
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		SecurityUtils.sendResponse(response, HttpServletResponse.SC_FORBIDDEN,
				"Authentication failed", exception);
	}

}
