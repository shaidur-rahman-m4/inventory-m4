package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidOrderProductNameImpl implements ConstraintValidator<ValidateOrderProductName, String> {

	private int min;

	@Override
	public void initialize(ValidateOrderProductName constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		if (name.equals("")) {
			return false;
		}
		return true;
	}

}
