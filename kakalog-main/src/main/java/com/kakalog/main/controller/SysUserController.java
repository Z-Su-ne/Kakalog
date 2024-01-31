package com.kakalog.main.controller;


import com.kakalog.main.entity.SysUser;
import com.kakalog.main.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 用户管理 前端控制器
 * </p>
 *
 * @author hzw
 * @since 2023-12-10
 */
@RestController
@RequestMapping("/sys-user")
public class SysUserController {
    @Autowired
    SysUserService service;

    @GetMapping("/all")
    public Iterable<SysUser> getAllUser() {
        return service.getAllSysUser();
    }

    @GetMapping("/find/uid/{uid}")
    public SysUser getUser(@PathVariable Long uid){
        return service.getUser(uid);
    }

    @GetMapping("/find/name/{name}")
    public SysUser getUserbyname(@PathVariable String name){
        return service.getUserbyname(name);
    }

    @PostMapping("/add")
    public String addUser(@RequestBody SysUser sysUser){
        service.addUser(sysUser);
        return "User add successfully";
    }

    @PostMapping("/upd")
    public String updateUser(@RequestBody SysUser sysUser){
        service.updateUser(sysUser);
        return "User update successfully";
    }

    @DeleteMapping("/del/{uid}")
    public String delUser(@PathVariable Long uid){
        service.deleteUser(uid);
        return "User deleted successfully";
    }
}

