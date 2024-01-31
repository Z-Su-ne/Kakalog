package com.kakalog.main.controller;


import com.kakalog.main.entity.SysHealth;
import com.kakalog.main.service.SysHealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 健康信息管理 前端控制器
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@RestController
@RequestMapping("/sys-health")
public class SysHealthController {
    @Autowired
    SysHealthService service;

    @GetMapping("/all")
    public Iterable<SysHealth> getAllHealths() {
        return service.getAllSysHealth();
    }

    @GetMapping("/find/{uid}")
    public SysHealth getHealths(@PathVariable Long uid){
        return service.getHealth(uid);
    }

    @PostMapping("/add")
    public String addHealth(@RequestBody SysHealth sysHealth){
        service.addHealth(sysHealth);
        return "Health add successfully";
    }

    @PostMapping("/upd")
    public String updateHealth(@RequestBody SysHealth sysHealth){
        service.updateHealth(sysHealth);
        return "Health update successfully";
    }

    @DeleteMapping("/del/{uid}")
    public String delHealth(@PathVariable Long uid){
        service.deleteHealth(uid);
        return "Health deleted successfully";
    }
}

