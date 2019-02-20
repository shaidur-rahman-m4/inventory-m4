package com.metafour.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metafour.model.Product;
import com.metafour.services.ProductService;

@Controller
@RequestMapping("/inventory")
public class ProductController {

	@Autowired
	ProductService productService;

	@RequestMapping
	public String productScreen(Model model) {
		model.addAttribute("product", new Product());
		return "products";
	}

	@PostMapping(value = "/addProduct")
	@ResponseBody
	public void addProduct(Product product, Model model) {
		productService.addProduct(product);
		model.addAttribute("product", new Product());
	}
}
