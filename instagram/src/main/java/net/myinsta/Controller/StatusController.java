package net.myinsta.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.myinsta.Entity.Status;
import net.myinsta.Service.StatusService;

@RestController
@RequestMapping("/status")
public class StatusController {

	@Autowired
	StatusService StatusService;
	
	@PostMapping("")
	private Status submitStatus(@RequestBody Status status) {
		return StatusService.submitDataIntoDB(status);
	}

	@GetMapping("")
	private ArrayList<Status> getArrayList() {
		return StatusService.retrieveArrayList();
	}

}
