package br.edu.unoesc.example_jsp;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexController {
	@RequestMapping("/jsp")
	String jsp(Model model) {
		Product p1 = new Product("Desk", 10, new BigDecimal("3.33"));
		Product p2 = new Product("Chair", 20, new BigDecimal("33.33"));
		
		List<Product> products = new ArrayList<Product>();
		products.add(p1);
		products.add(p2);
		
		model.addAttribute("product", p1);
		model.addAttribute("products", products);
		
		return "index";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String showLoginScreen(ModelMap model) {
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String showLoginScreen(ModelMap model, @RequestParam String name, @RequestParam String nPassword) {
		if (!(name.equals("unoesc") && nPassword.equals("dev-ti"))) {
			model.put("error", "Invalid Data");
			return "login";
		}
		model.put("name", name);
		model.put("password", nPassword);
		
		return "welcome";
	}
		
}
