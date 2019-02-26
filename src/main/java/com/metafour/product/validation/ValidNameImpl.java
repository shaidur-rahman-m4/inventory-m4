package com.metafour.product.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.metafour.services.ProductService;

public class ValidNameImpl implements ConstraintValidator<ValidateName, String> {

	@Autowired
	ProductService productService;

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		if (productService.checkProductByName(name)) {
			return false;
		}
		return true;
	}

}
