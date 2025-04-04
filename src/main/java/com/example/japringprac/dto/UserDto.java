package com.example.japringprac.dto;

import lombok.Getter;
import lombok.Setter;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;

@Getter
@Setter
public class UserDto {

//    @NotBlank
    private String user_id;
//
//    @NotBlank
//    @Size(min = 8)
    private String password;
}
