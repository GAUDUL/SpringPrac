package com.example.japringprac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import  com.example.japringprac.entity.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

}
