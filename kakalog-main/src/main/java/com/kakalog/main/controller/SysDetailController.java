package com.kakalog.main.controller;


import com.kakalog.main.entity.SysDetail;
import com.kakalog.main.service.SysDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 详情管理 前端控制器
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@RestController
@RequestMapping("/sys-detail")
public class SysDetailController {

    @Autowired
    SysDetailService service;

    @GetMapping("/all")
    public Iterable<SysDetail> getAllDetails() {
        return service.getAllDetails();
    }

    @GetMapping("/find/did/{did}")
    public SysDetail getDetails(@PathVariable String did){
        return service.getDetails(did);
    }

    @GetMapping("/find/oid/{oid}")
    public List<SysDetail> getDetailsbyoid(@PathVariable String oid){
        return service.getDetailsbyoid(oid);
    }

    @GetMapping("/find/kind/{kind}/{oid}")
    public  List<SysDetail> getDetailByoidandkind(@RequestParam("oid") String oid,@RequestParam("kind") Integer kind){
        return service.getDetailByoidandkind(oid,kind);
    }

    @PostMapping("/add")
    public String addDetail(@RequestParam("uid") Long uid ,@RequestParam("date") Long timestamp,@RequestParam("pid") Long pid,@RequestParam("name") String name,@RequestParam("quantity") Integer quantity,@RequestParam("caloricSum") Integer caloricSum,@RequestParam("kind") Integer kind,@RequestParam("specification") String specification,@RequestParam("info") String info){
        service.addDetails(uid, timestamp, pid, name, quantity, caloricSum, 0,kind,specification,info);
        return "Detail add successfully";
    }

    @PostMapping("/upd")
    public String updateDetail(@RequestBody SysDetail sysDetail){
        service.updateDetail(sysDetail);
        return "Detail update successfully";
    }

    @DeleteMapping("/del/{did}")
    public String delDetail(@PathVariable Long did){
        service.deleteDetail(did);
        return "Detail deleted successfully";
    }
}

