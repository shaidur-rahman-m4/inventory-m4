package com.metafour.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import org.springframework.stereotype.Service;
import com.metafour.model.Product;

@Service
public class ProductService {
	List<Product> products = new ArrayList<>();

	public List<Product>  addProduct(Product product) {
		product.setId(String.valueOf(new Random().nextLong()));
		products.add(product);
		System.out.println(products.toString());
		return products;
	}

	public List<Product> findProducts() {
		return products;
	}
}
