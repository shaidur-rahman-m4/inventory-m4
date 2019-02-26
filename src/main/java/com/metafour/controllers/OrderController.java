package com.metafour.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metafour.exeption.MetafourStarterException;
import com.metafour.model.Order;
import com.metafour.services.OrderService;
import com.metafour.services.ProductService;

@Controller
@RequestMapping("/order")
public class OrderController {

	@Autowired
	ProductService productService;

	@Autowired
	OrderService orderService;

	@RequestMapping
	public String productScreen(final ModelMap model) throws MetafourStarterException {
		model.addAttribute("order", new Order());
		model.addAttribute("productlist", productService.findProducts());
		model.addAttribute("orderlist", orderService.findOrdeers());
		return "order";
	}
	
	
	@GetMapping("/orders")
	public String orders(final ModelMap model) throws MetafourStarterException{
		model.addAttribute("orders", orderService.findOrdeers());
		return "orders";
	}

	/*
	 * // @RequestMapping("/{id}") public String updateScreen(final ModelMap model)
	 * throws MetafourStarterException { model.addAttribute("productlist",
	 * productService.findProducts()); return "order"; }
	 */

	@PostMapping("/addOrder")
	@ResponseBody
	public Map<String, String> addOrder(@Valid Order order, BindingResult binding, final ModelMap model)
			throws MetafourStarterException, BindException {
		Map<String, String> result = new HashMap<>();
		if (binding.hasErrors())
			throw new BindException(binding);

		orderService.addOrder(order);
		result.put("status", "success");
		result.put("redirect", "/");
		return result;
	}

}
