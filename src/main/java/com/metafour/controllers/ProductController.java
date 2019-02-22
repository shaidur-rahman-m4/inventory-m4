package com.metafour.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metafour.exeption.MetafourStarterException;
import com.metafour.model.Product;
import com.metafour.services.ProductService;

@Controller
@RequestMapping("/product")
public class ProductController {
	

	@Autowired
	ProductService productService;

	@RequestMapping
	public String productScreen(final ModelMap model) throws MetafourStarterException {
		System.out.println(productService.findProducts().toString());
		return updateScreen(null, model);
	}

	@RequestMapping("/{id}")
	public String updateScreen(@PathVariable String id, final ModelMap model) throws MetafourStarterException {
		model.addAttribute("product", new Product());
		return "products";
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public List<Product> addNewProduct(@Valid Product product, BindingResult binding, final ModelMap model) throws MetafourStarterException, BindException {
		if (binding.hasErrors())
			throw new BindException(binding);
		
		model.addAttribute("product", new Product());
		return productService.addProduct(product);
	}
	
	@GetMapping(value = "/findProducts")
	@ResponseBody
	public List<Product> findProducts() {
		return productService.findProducts();
	}
}
