package net.myinsta.Repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import net.myinsta.Entity.Comments;

@Repository
public interface CommentRepo extends CrudRepository<Comments, Integer> {

    Comments save(Comments comment);

    ArrayList<Comments> findAllByPostId(String postId);
}
