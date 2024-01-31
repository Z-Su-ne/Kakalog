package com.kakalog.main.controller;


import com.kakalog.main.entity.SysProducts;
import com.kakalog.main.service.SysProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 产品管理 前端控制器
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@RestController
@RequestMapping("/sys-products")
public class SysProductsController {
    @Autowired
    SysProductsService service;

    @GetMapping("/all")
    public Iterable<SysProducts> getAllProducts() {
        return service.getAllSysProducts();
    }

    @GetMapping("/find/pid/{pid}")
    public List<SysProducts> getProductsBypid(@PathVariable Long pid){
        return service.getProductsBypid(pid);
    }

    @GetMapping("/find/uid/{uid}")
    public List<SysProducts> getProductsByuid(@PathVariable Long uid){
        return service.getProductsByuid(uid);
    }

    @GetMapping("/find/name/{name}")
    public List<SysProducts>  getProductsByname(@PathVariable String name){
        return service.getProductsByname(name);
    }

    @GetMapping("/find/kind/{kind}")
    public List<SysProducts> getProductsBykind(@PathVariable Integer kind){
        return service.getProductsBykind(kind);
    }

    @GetMapping("/find/specification/{specification}")
    public List<SysProducts> getProductsByspecification(@PathVariable String specification){
        return service.getProductsByspecification(specification);
    }

    @GetMapping("/find/info/{info}")
    public List<SysProducts> getProductsByinfo(@PathVariable String info){
        return service.getProductsByinfo(info);
    }

    @GetMapping("/find/caloric/{caloric}")
    public List<SysProducts> getProductsBycaloric(@PathVariable Integer caloric){
        return service.getProductsBycaloric(caloric);
    }

    @PostMapping("/add")
    public String addProducts(@RequestBody SysProducts sysProducts){
        service.addProducts(sysProducts);
        return "Products add successfully";
    }

    @PostMapping("/upd")
    public String updateProducts(@RequestBody SysProducts sysProducts){
        service.updateProducts(sysProducts);
        return "Products update successfully";
    }

    @DeleteMapping("/del/{pid}")
    public String delProducts(@PathVariable Long pid){
        service.deleteProducts(pid);
        return "Products deleted successfully";
    }
}

