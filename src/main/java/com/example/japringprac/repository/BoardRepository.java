package com.example.japringprac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import  com.example.japringprac.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface BoardRepository extends JpaRepository<Board, Long> {
    Page<Board> findAll(Pageable pageable);
}
