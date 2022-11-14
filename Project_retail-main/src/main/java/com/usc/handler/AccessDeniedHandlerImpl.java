package com.usc.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import com.usc.security.SecurityUtils;

@Component
public class AccessDeniedHandlerImpl implements AccessDeniedHandler {

	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException exception) 
					throws IOException, ServletException {
		// TODO Auto-generated method stub
		SecurityUtils.sendResponse(response, HttpServletResponse.SC_UNAUTHORIZED,
				"Not authorize resources", exception);
	}
	

}
