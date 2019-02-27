package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.metafour.services.OrderService;
import com.metafour.services.ProductService;

public class ValidOrderQuantityMaxImpl implements ConstraintValidator<ValidateOrderQuantityMax, Long> {
	@Autowired
	ProductService productService;

	@Autowired
	OrderService orderService;

	private int min;

	@Override
	public void initialize(ValidateOrderQuantityMax constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(Long qty, ConstraintValidatorContext context) {
		if (orderService.type.equalsIgnoreCase("sale") && qty > productService.getQuantityByName(orderService.name)) {
			return false;
		}
		return true;
	}

}
