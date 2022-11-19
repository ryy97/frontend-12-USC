package com.usc.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usc.beans.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
	Optional<Product> findByProductname(String productname);
	void deleteByProductname(String productname);
}
