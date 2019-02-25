package com.metafour.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidNameImpl implements ConstraintValidator<ValidateName, String> {


	@Override
	public void initialize(ValidateName constraintAnnotation) {
	}

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		if (name == null) {
			return false;
		}
		return true;
	}

}
