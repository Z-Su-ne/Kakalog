package com.kakalog.main.controller;

import com.kakalog.main.entity.SysTips;
import com.kakalog.main.service.SysTipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sys-tips")
public class SysTipsController {
    @Autowired
    SysTipsService sysTipsService;

    @GetMapping("/getalltips")
    public Iterable<SysTips> findalltips(){
        return sysTipsService.findalltips();
    }
}
