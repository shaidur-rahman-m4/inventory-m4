package com.metafour.order.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidOrderTypeImpl implements ConstraintValidator<ValidateOrderType, String> {

	private int min;

	@Override
	public void initialize(ValidateOrderType constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(String type, ConstraintValidatorContext context) {
		if (type == null) {
			return false;
		}
		return true;
	}

}
