package com.example.japringprac.controller;

import com.example.japringprac.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.japringprac.dto.UserDto;  // UserDto 임포트 추가

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //회원가입
    @PostMapping
    public void register(@RequestBody UserDto userDto){
//        System.out.println("UserDto 내용");
//        System.out.println(userDto);
        userService.register(userDto);
    }

    //로그인
    @PostMapping("/login")
    public Boolean login(@RequestBody UserDto userDto){
        return userService.login(userDto);
    }

}
