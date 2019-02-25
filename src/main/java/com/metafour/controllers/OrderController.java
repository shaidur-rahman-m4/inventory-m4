package com.metafour.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.metafour.exeption.MetafourStarterException;
import com.metafour.services.ProductService;

@Controller
@RequestMapping("/order")
public class OrderController {

	@Autowired
	ProductService productService;

	@RequestMapping
	public String productScreen(final ModelMap model) throws MetafourStarterException {
		model.addAttribute("productlist", productService.findProducts());
		return "order";
	}

	/*
	 * // @RequestMapping("/{id}") public String updateScreen(final ModelMap model)
	 * throws MetafourStarterException { model.addAttribute("productlist",
	 * productService.findProducts()); return "order"; }
	 */

//	@RequestMapping(value = "/product", method = RequestMethod.POST)
//	@ResponseBody
//	public Map<String, String> addNewProduct(@Valid Product product, BindingResult binding, final ModelMap model)
//			throws MetafourStarterException, BindException {
//		Map<String, String> result = new HashMap<>();
//		if (binding.hasErrors())
//			throw new BindException(binding);
//
//		productService.addProduct(product);
//		result.put("status", "success");
//		result.put("redirect", "/");
//		return result;
//	}

}
