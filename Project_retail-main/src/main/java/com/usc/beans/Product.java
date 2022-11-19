package com.usc.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "PRODUCT")
public class Product {
	@Id
	@GeneratedValue
	private int id;

	private String productname;
	
	private int quantity;
	
	private double price;
	
	private String photos;
	
	private String producer;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getPhotos() {
		return photos;
	}

	public void setPhotos(String photos) {
		this.photos = photos;
	}

	public String getProducer() {
		return producer;
	}

	public void setProducer(String producer) {
		this.producer = producer;
	}

	public Product(String productname, int quantity, String photos, String producer, double price) {
		super();
		this.productname = productname == null ? "Default" : productname;
		this.quantity = quantity;
		this.photos = photos == null ? "Default" : photos;
		this.producer = producer == null ? "Default" : producer ;
		this.price = price;
	}
	
	

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", productname=" + productname + ", quantity=" + quantity + ", price=" + price
				+ ", photos=" + photos + ", producer=" + producer + "]";
	}

	
	
	
}
