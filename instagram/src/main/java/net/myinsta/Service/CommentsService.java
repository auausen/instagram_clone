package net.myinsta.Service;

import java.util.ArrayList;

import net.myinsta.Entity.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import net.myinsta.Entity.Comments;
import net.myinsta.Repository.CommentRepo;

@Service
public class CommentsService {

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    UserService userService;


    public Comments submitCommentToDB(Comments comment) {
        return commentRepo.save(comment);
    }


    public ArrayList<Comments> getAllCommentsForDB(String postId) {

        ArrayList<Comments> commentList = commentRepo.findAllByPostId(postId);

        for (int i = 0; i < commentList.size(); i++) {
            Comments commentItem = commentList.get(i);
            commentItem.setUserName(userService.displayUserMetaData(commentItem.getUserId()).getUserName());
        }

        return commentList;
    }
}
