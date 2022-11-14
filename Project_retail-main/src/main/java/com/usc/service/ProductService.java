package com.usc.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.usc.beans.Product;
import com.usc.dao.ProductDao;
import com.usc.http.Response;

@Service
@Transactional
public class ProductService {
	
	@Autowired
	ProductDao productDao;
	
	public Response addProduct(Product product) {
		productDao.save(product);
		return new Response(true);
	}
	
	public Response deleteProductById(int id) {
		if (productDao.findById(id) != null) {
			productDao.deleteById(id);
			return new Response(true);
		} else {
			return new Response(false, "Product is not found");
		}
	}
	
	public Response deleteProductByName(String name) {
		if (productDao.findByProductname(name) != null) {
			productDao.deleteByProductname(name);;
			
			return new Response(true);
		} else {
			return new Response(false, "Product is not found");
		}
	}
	
	public Response updateProductById(int id, Product product) {
		Optional<Product> op = productDao.findById(id);
		if (op.isPresent()) {
			Product p = op.get();
			if (!p.getProductname().equals(product.getProductname())) {
				p.setProductname(product.getProductname());
			}
			if (!p.getProducer().equals(product.getProducer())) {
				p.setProducer(product.getProducer());
			}
			if (p.getQuantity() != (product.getQuantity())) {
				p.setQuantity(product.getQuantity());
			}
			if (!p.getPhotos().equals(product.getPhotos())) {
				p.setPhotos(product.getPhotos());
			}	
			return new Response(true);
		} else {
			return new Response(false, "Product is not found");
		}
	}
}
