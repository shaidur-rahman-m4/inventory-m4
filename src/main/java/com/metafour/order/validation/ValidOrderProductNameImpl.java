package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.metafour.services.OrderService;

public class ValidOrderProductNameImpl implements ConstraintValidator<ValidateOrderProductName, String> {
	@Autowired
	OrderService orderService;

	private int min;

	@Override
	public void initialize(ValidateOrderProductName constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		orderService.setName(name);
		if (name.equals("")) {
			return false;
		}
		return true;
	}

}
