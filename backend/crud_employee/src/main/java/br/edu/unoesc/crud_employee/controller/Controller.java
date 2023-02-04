package br.edu.unoesc.crud_employee.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unoesc.crud_employee.model.Employee;

@RestController
@RequestMapping(value = "/api")
public class Controller {
	Employee employee = new Employee(1L, "Robson", 1, new BigDecimal("10000.00"));
	
	List<Employee> employees;
	
	public Controller() {
		employees = new ArrayList<Employee>();
		employees.add(employee);
	}
	
//	LIST EMPLOYEES
	@GetMapping(value = "/employees")
	public List<Employee> listEmployees(){
		return employees;
	}
	
//  ADD NEW EMPLOYEE
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		employees.add(employee);
		return employee;
	}
	
//	SEARCH EMPLOYEE   
	@GetMapping(value = "/employees/{id}")
	public Employee findById(@PathVariable Long id) {
		for(Employee employee : employees) {
			if(employee.getId().equals(id)) {
				return employee;
			}
		}
		return null;
	}
	
//  UPDATE EMPLOYEE
	@PutMapping("/employees")
	public Employee updateEmployee(@RequestBody Employee employee) {
		Employee e = findById(employee.getId());
		
		e.setName(employee.getName());
		e.setDependents(employee.getDependents());
		e.setSalary(employee.getSalary());
		
		return e;
	}
	
//	DELETE EMPLOYEE
	@DeleteMapping(value = "/employees/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		Employee e = findById(id);
		
		employees.remove(e);
	}
	
}
