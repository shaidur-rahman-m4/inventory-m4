package com.metafour.model;

import java.util.Date;

import lombok.Data;

@Data
public class Product {
	private String id;
	private String name;
	private String price;
	private String quantity;
	private Date date;
}
