package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.metafour.services.ProductService;

public class ValidOrderQuantityImpl implements ConstraintValidator<ValidateOrderQuantity, Long> {
	@Autowired
	ProductService productService;

	private int min;

	@Override
	public void initialize(ValidateOrderQuantity constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(Long qty, ConstraintValidatorContext context) {
		if (qty == null || qty < min) {
			return false;
		}
		return true;
	}

}
