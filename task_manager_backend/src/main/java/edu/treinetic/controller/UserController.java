package edu.treinetic.controller;

import edu.treinetic.model.Users;
import edu.treinetic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        return userService.register(user);
    }

    @GetMapping("/users")
    public List<Users> getAll(){
        return userService.getAll();
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user){
        System.out.println(user);
        return userService.verify(user);
    }
}
