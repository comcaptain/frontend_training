package com.sgq.demo.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.PathResource;
import org.springframework.http.CacheControl;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import java.util.concurrent.TimeUnit;

import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
@EnableWebFlux
public class WebConfigure implements WebFluxConfigurer
{
	@Bean
	public RouterFunction<ServerResponse> htmlRouter() {
		PathResource indexHTML = new PathResource("public/index.html");
		return route(request -> {
				if (!"GET".equals(request.methodName())) return false;
				String path = request.path();
				if (path.startsWith("/api/")) return false;
				int dotIndex = path.lastIndexOf('.');
				if (dotIndex >= 0 && path.indexOf('/', dotIndex) < 0) return false;
				return true;
			}, request -> ok()
			.contentType(MediaType.TEXT_HTML)
			.bodyValue(indexHTML)
		);
	}
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry)
	{
		registry.addResourceHandler("/pictures/**")
			.addResourceLocations("file:/home/Mickey1992/Photos/")
			.setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS));
		registry.addResourceHandler("**")
			.addResourceLocations("file:public/")
			.setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS));
	}
}
