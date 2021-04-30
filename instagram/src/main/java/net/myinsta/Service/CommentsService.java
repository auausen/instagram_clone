package net.myinsta.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import net.myinsta.Entity.Comments;
import net.myinsta.Repository.CommentRepo;

@Service
public class CommentsService {

	@Autowired
	CommentRepo CommentRepo;
	
	@PostMapping("")
	public Comments submitCommentToDB(Comments comment) {
		
	}
	
	@GetMapping("/{postId}")
	public ArrayList<Comments> getAllCommentsForDB(String postId){
		;
	}
}
