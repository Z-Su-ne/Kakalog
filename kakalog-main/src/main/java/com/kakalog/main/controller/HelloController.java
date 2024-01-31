package com.kakalog.main.controller;

import com.kakalog.main.entity.SysDetail;
import com.kakalog.main.entity.SysHealth;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description  控制类
 * @Author 邹宇鹏
 * @Date 2023/10/14
 */
@RestController
public class HelloController {
    //    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @GetMapping("/hello")
    public String hello() {
        return "hello kakalog!";
    }

    @PostMapping("/user")
    public SysDetail sysDetail(){
        return new SysDetail();
    }

    @PostMapping("/sys_health")
    public SysHealth sysHealth(){
        return new SysHealth();
    }

    @ApiOperation("hello控制类")
    @PostMapping("/hello_user")
    public String hello_user(String username){
        return "hello " + username;
    }
}
