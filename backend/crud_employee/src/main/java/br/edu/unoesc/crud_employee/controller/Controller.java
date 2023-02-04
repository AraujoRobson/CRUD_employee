package br.edu.unoesc.crud_employee.controller;

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
	Employee employee;
	
	List<Employee> employees;
	
	public Controller() {
		employees = new ArrayList<Employee>();
		employees.add(employee);
	}
	
//	LIST EMPLOYEES
	@GetMapping(value = "/emplyees")
	public List<Employee> listEmployees(){
		return employees;
	}
	
//  ADD NEW EMPLOYEE
	@PostMapping("/employees")
	public Employee addEmployee(Employee employee) {
		employees.add(employee);
		return employee;
	}
	
//	SEARCH EMPLOYEE   
	@GetMapping(value = "/employee/{id}")
	public Employee findById(@PathVariable Long id) {
		for(Employee employee : employees) {
			if(employee.getId().equals(id)) {
				return employee;
			}
		}
		return null;
	}
	
//  UPDATE EMPLOYEE
	@PutMapping("/employee")
	public Employee updateEmployee(@RequestBody Employee employee) {
		Employee e = findById(employee.getId());
		
		e.setName(employee.getName());
		e.setNumberOfDependent(employee.getNumberOfDependent());
		e.setSalary(employee.getSalary());
		
		return e;
	}
	
//	DELETE EMPLOYEE
	@DeleteMapping(value = "/employee/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		Employee e = findById(id);
		
		employees.remove(e);
	}
	
}
