package com.kakalog.main.controller;


import com.kakalog.main.entity.SysOrders;
import com.kakalog.main.service.SysOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 订单管理 前端控制器
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@RestController
@RequestMapping("/sys-orders")
public class SysOrdersController {
    @Autowired
    SysOrdersService service;

    @GetMapping("/all")
    public Iterable<SysOrders> getAllOrders() {
        return service.getAllSysOrders();
    }

    @GetMapping("/find/oid/{oid}")
    public SysOrders getOrders(@PathVariable Long oid){
        return service.getOrders(oid);
    }

    @GetMapping("/find/uid/{uid}")
    public List<SysOrders> getOrdersbyuid(@PathVariable Long uid){
        return service.getOrdersbyuid(uid);
    }

    @PostMapping("/exists")
    public void addOrUpdOrder(@RequestParam("uid") Long uid ,@RequestParam("date") Long timestamp){
        Date date = new Date(timestamp);
        service.addOrUpdOrder(uid,date);
    }

    @GetMapping("/find/time/{uid}")
    public List<String> getSuffixOfOidByUidPrefix(@PathVariable Long uid) {
        return service.getSuffixOfOidByUidPrefix(uid.toString());
    }

    @PostMapping("/add")
    public String addOrders(@RequestParam("uid") Long uid ,@RequestParam("date") Long timestamp){
        Date date = new Date(timestamp);
        service.addOrders(uid,date);
        return "Orders add successfully";
    }

    @PostMapping("/upd")
    public String updateOrders(@RequestBody SysOrders sysOrders){
        service.updateOrders(sysOrders);
        return "Orders update successfully";
    }

    @DeleteMapping("/del/{oid}")
    public String delOrders(@PathVariable Long oid){
        service.deleteOrders(oid);
        return "Orders deleted successfully";
    }
}

