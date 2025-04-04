package com.example.japringprac.controller;

import com.example.japringprac.dto.BoardDto;
import com.example.japringprac.entity.Board;
import com.example.japringprac.service.BoardService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/upload")
    public void upload(@RequestBody BoardDto boardDto) {
        boardService.postUpload(boardDto);
    }

    @GetMapping("/list")
    public Page<Board> boardList(@RequestParam int page, @RequestParam int size){
        return boardService.getPosts(page, size);
    }
}
