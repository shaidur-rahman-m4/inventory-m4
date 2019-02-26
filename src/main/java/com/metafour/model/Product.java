package com.metafour.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.format.annotation.DateTimeFormat;

import com.metafour.product.validation.ValidateName;
import com.metafour.product.validation.ValidatePrice;
import com.metafour.product.validation.ValidateQuantity;

import lombok.Data;

@Data
public class Product {

	private String id;
	
	@NotEmpty(message = "The name can't be empty")
	@ValidateName
	private String name;

	@ValidatePrice
	private Long price;

	@ValidateQuantity
	private Long quantity;

	@DateTimeFormat(pattern = "E, dd MMM yyyy")
	private String date;
}
