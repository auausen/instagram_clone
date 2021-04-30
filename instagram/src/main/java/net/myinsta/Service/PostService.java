package net.myinsta.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.myinsta.Entity.Post;
import net.myinsta.Entity.Status;
import net.myinsta.Repository.PostRepo;

@Service
public class PostService {
	@Autowired
	PostRepo postRepo;

	@Autowired
	UserService userService;

	public Post submitPostToDataBase(Post post) {
		return postRepo.save(post);
	}

	public ArrayList<Post> retrivePostFromDB() {
		
		ArrayList<Post> postList = postRepo.findAll();

		for (int i = 0; i < postList.size(); i++) {
			Post postitem = postList.get(i);
			postitem.setUserName(userService.displayUserMetaData(postitem.getUserId()).getUserName());
		}

		return postList;
	}

}
