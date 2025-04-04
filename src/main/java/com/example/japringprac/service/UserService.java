package com.example.japringprac.service;

import com.example.japringprac.repository.UserRepository;
import org.springframework.stereotype.Service;

import com.example.japringprac.dto.UserDto;
import com.example.japringprac.entity.User;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //회원가입
    public void register(UserDto userDto){
        User user=new User();
        user.setUser_id(userDto.getUser_id());
        user.setPassword(userDto.getPassword());

        userRepository.save(user);
    }

    //로그인
    public boolean login(UserDto userDto){
        User user=userRepository.findById(userDto.getUser_id()).orElse(null);

        //user 존재 및 비밀번호 일치 확인
        if(user!=null && user.getPassword().equals(userDto.getPassword())){
            return true;
        }
        else return false;
    }

}
