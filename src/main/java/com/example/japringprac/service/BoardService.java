package com.example.japringprac.service;

import com.example.japringprac.dto.BoardDto;
import com.example.japringprac.entity.Board;
import com.example.japringprac.repository.BoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    //글 업로드
    public void postUpload(BoardDto boardDto) {
        Board board = new Board();
        board.setTitle(boardDto.getTitle());
        board.setContents(boardDto.getContents());

        boardRepository.save(board);
    }

    //글 목록 조회
    public Page<Board> getPosts(int page, int size){
        Pageable pageable = PageRequest.of(page,size);
        return boardRepository.findAll(pageable);
    }

}
