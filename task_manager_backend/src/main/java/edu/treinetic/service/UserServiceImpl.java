package edu.treinetic.service;

import edu.treinetic.model.Users;
import edu.treinetic.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo repo;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JWTService jwtService;
    @Override
    public Users register(Users user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return repo.save(user);
    }
    @Override
    public List<Users> getAll(){
        return repo.findAll();
    }

    @Override
    public String verify(Users user){
        Authentication authentication =
                authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        return authentication.isAuthenticated() ? jwtService.generateToken(user.getUsername()) : "Fail";
    }

}
