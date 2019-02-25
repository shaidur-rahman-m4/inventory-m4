package com.metafour.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidPriceImpl implements ConstraintValidator<ValidatePrice, Long> {

	private int min;

	@Override
	public void initialize(ValidatePrice constraintAnnotation) {
		min = constraintAnnotation.min();
	}

	@Override
	public boolean isValid(Long price, ConstraintValidatorContext context) {
		if (price == null || price < min) {
			return false;
		}
		return true;
	}

}
