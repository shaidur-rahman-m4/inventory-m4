package com.metafour.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.format.annotation.DateTimeFormat;

import com.metafour.validation.ValidatePrice;
import com.metafour.validation.ValidateQuantity;

import lombok.Data;

@Data
public class Product {

	private String id;
	@NotEmpty(message = "The name can't be empty")
	private String name;

	@ValidatePrice
	private Long price;

	@ValidateQuantity
	private Long quantity;

	@DateTimeFormat(pattern = "E, dd MMM yyyy")
	private String date;
}
