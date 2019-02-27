package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.metafour.services.OrderService;

public class ValidOrderTypeImpl implements ConstraintValidator<ValidateOrderType, String> {
	@Autowired
	OrderService orderService;

	private int min;

	@Override
	public void initialize(ValidateOrderType constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(String type, ConstraintValidatorContext context) {
		orderService.setType(type);
		if (type == null) {
			return false;
		}
		return true;
	}

}
