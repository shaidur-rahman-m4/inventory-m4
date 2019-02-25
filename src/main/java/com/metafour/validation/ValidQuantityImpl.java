package com.metafour.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidQuantityImpl implements ConstraintValidator<ValidateQuantity, Long> {

	private int min;

	@Override
	public void initialize(ValidateQuantity constraintAnnotation) {
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
