package net.myinsta.Entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "Comments")
public class Comments {

	@Id
	@GeneratedValue
	private int id;
	
	private String commentId;
	private String userId;
	private String postId;
	private Timestamp timestamp;
	private String comment;
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comments(int id, String commentId, String userId, String postId, Timestamp timestamp, String comment) {
		super();
		this.id = id;
		this.commentId = commentId;
		this.userId = userId;
		this.postId = postId;
		this.timestamp = timestamp;
		this.comment = comment;
	}
	
}
