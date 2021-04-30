package net.myinsta.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.myinsta.Entity.Users;
import net.myinsta.Repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;

	public Users submitMetaDataOfUser(Users user) {
		return userRepo.save(user);

	}

	public Users displayUserMetaData(String userId) {
		return userRepo.findByUserId(userId);
	}
}
