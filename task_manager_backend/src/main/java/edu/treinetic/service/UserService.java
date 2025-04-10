package edu.treinetic.service;

import edu.treinetic.model.Users;

import java.util.List;

public interface UserService {
    Users register(Users user);
    List<Users> getAll();
    String verify(Users user);
}
