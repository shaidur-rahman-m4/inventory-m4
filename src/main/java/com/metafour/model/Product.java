package com.metafour.model;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import lombok.Data;

@Data
public class Product {

	private String id;
	@NotEmpty(message = "The name can't be empty")
	private String name;

	@DecimalMin(value = "1", message = "Price must be up to 0")
	private Long price;

	@DecimalMin(value = "1", message = "Quantity at least 1")
	private Long quantity;

	@DateTimeFormat(pattern = "E, dd MMM yyyy")
	private String date;
}
