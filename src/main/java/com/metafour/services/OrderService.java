package com.metafour.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.metafour.model.Order;

@Service
public class OrderService {
	List<Order> orders = new ArrayList<>();
	public String name;
	public String type;
	boolean flag;

	public void setName(String name) {
		this.name = name;
	}

	public void setType(String type) {
		System.out.println("tyyyyype:"+type);
		this.type = type;
		System.out.println("tyythisssssss:"+this.type);
	}

	public void init() {
		orders.clear();
	}

	public List<Order> addOrder(Order order) {
		flag = false;
		orders.forEach(ord -> {
			if (ord.getName().equals(order.getName()) && ord.getType().equals(order.getType())) {
				ord.setQuantity(ord.getQuantity() + order.getQuantity());
				flag = true;
			}
		});
		if (flag == false) {
			order.setId(String.valueOf(new Random().nextLong()));
			orders.add(order);
			return orders;
		}
		return orders;
	}

	public List<Order> findOrdeers() {
		return orders;
	}
}
