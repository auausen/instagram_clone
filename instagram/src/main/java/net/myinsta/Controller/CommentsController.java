package net.myinsta.Controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.myinsta.Entity.Comments;

@RestController
@RequestMapping("/comments")
public class CommentsController {

	@PostMapping("")
	private Comments submitComment(@RequestBody Comments comment) {
		return new Comments();
	}
	
	@GetMapping("/{postId}")
	private ArrayList<Comments> getCommentsForPost(@PathVariable("postId") String postId){
		return new ArrayList<Comments>();
	}
}
