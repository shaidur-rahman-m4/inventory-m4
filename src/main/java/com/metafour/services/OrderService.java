package com.metafour.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.metafour.model.Order;

@Service
public class OrderService {
	List<Order> orders = new ArrayList<>();

	public void init() {
		orders.clear();
	}

	public List<Order> addOrder(Order order) {
		order.setId(String.valueOf(new Random().nextLong()));
		orders.add(order);
		System.out.println(orders.toString());
		return orders;
	}

	public List<Order> findOrdeers() {
		return orders;
	}
}
