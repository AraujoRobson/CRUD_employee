package br.edu.unoesc.crud_employee.model;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Employee {
	private String name;
	private Integer numberOfDependent;
	private BigDecimal salary;
}
