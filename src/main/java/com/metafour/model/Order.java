package com.metafour.model;

import com.metafour.order.validation.ValidateOrderProductName;
import com.metafour.order.validation.ValidateOrderQuantity;
import com.metafour.order.validation.ValidateOrderType;

import lombok.Data;

@Data
public class Order {

	private String id;

	@ValidateOrderType
	private String type;

	@ValidateOrderProductName
	private String name;

	@ValidateOrderQuantity
	private Long quantity;

	private Long price;

	private Long totalPrice;

}
