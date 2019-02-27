package com.metafour.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import org.springframework.stereotype.Service;
import com.metafour.model.Product;

@Service
public class ProductService {
	List<Product> products = new ArrayList<>();

	public List<Product> addProduct(Product product) {
		product.setId(String.valueOf(new Random().nextLong()));
		products.add(product);
		return products;
	}

	public boolean checkProductByName(String name) {
		for (Product p : products) {
			if (p.getName().equalsIgnoreCase(name)) {
				return true;
			}
		}
		return false;
	}

	public long getQuantityByName(String name) {
		for (Product p : products) {
			if (p.getName().equalsIgnoreCase(name)) {
				return p.getQuantity();
			}
		}
		return 0;
	}

	public void updateQuantity(String type, String name, Long qty) {
		products.forEach(product -> {
			if (product.getName().equalsIgnoreCase(name)) {
				if (type.equalsIgnoreCase("sale")) {
					product.setQuantity(product.getQuantity() - qty);
				} else {
					product.setQuantity(product.getQuantity() + qty);
				}
			}
		});
	}

	public List<Product> findProducts() {
		return products;
	}
}
