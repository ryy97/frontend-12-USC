package com.usc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.usc.beans.Product;
import com.usc.dao.ProductDao;
import com.usc.handler.itemNotFoundException;
import com.usc.http.Response;
import com.usc.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	public List<Product> retrieveAllProdcuts() {
		return productDao.findAll();
	}
	
	@GetMapping("/products/id={id}")
	public EntityModel<Product> retrieveProductById(@PathVariable int id) {
		Optional<Product> product = productDao.findById(id);
		
		if (!product.isPresent()) {
			throw new itemNotFoundException("id-" + id);
		}
		
		EntityModel<Product> resource = EntityModel.of(product.get());

		Link link= linkTo(
				methodOn(this.getClass()).retrieveAllProdcuts()).withRel("all-products");
        resource.add(link);
        // HATEOAS
        return resource;
	}
	
	@GetMapping("/products/name={name}")
	public EntityModel<Product> retrieveProductByName(@PathVariable String name) {
		Optional<Product> product = productDao.findByProductname(name);

		if (!product.isPresent()) {
			throw new itemNotFoundException("name-" + name);
		}
		
		EntityModel<Product> resource = EntityModel.of(product.get());

		Link link= linkTo(
				methodOn(this.getClass()).retrieveAllProdcuts()).withRel("all-products");
        resource.add(link);
        // HATEOAS
        return resource;
	}
	
	@DeleteMapping("/products/id={id}")
	public Response deleteProdcuts(@PathVariable int id) {
		return productService.deleteProductById(id);
	}
	
	@DeleteMapping("/products/name={name}")
	public Response deleteProdcuts(@PathVariable String name) {
		return productService.deleteProductByName(name);
	}
	
	@PostMapping("/products")
	public Response addProducts(@RequestBody Product product) {
		return productService.addProduct(product);
	}
	
	@PutMapping("/products/id={id}")
	public Response updateProduct(@PathVariable int id, @RequestBody Product product) {
		return productService.updateProductById(id, product);
	}
}
