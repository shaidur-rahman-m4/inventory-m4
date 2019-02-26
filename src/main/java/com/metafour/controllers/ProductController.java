package com.metafour.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
		return updateScreen(null, model);
	}

	@RequestMapping("/{id}")
	public String updateScreen(@PathVariable String id, final ModelMap model) throws MetafourStarterException {
		model.addAttribute("product", new Product());
		model.addAttribute("productlist", productService.findProducts());
		return "products";
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> addNewProduct(@Valid Product product, BindingResult binding, final ModelMap model)
			throws MetafourStarterException, BindException {
		Map<String, String> result = new HashMap<>();
		if (binding.hasErrors())
			throw new BindException(binding);

		productService.addProduct(product);
		result.put("status", "success");
		result.put("redirect", "/");
		return result;
	}

	@GetMapping("/findProducts")
	@ResponseBody
	public List<Product> findProducts() {
		return productService.findProducts();
	}
}
