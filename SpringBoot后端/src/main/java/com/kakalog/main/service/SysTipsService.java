package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysOrders;
import com.kakalog.main.entity.SysProducts;
import com.kakalog.main.entity.SysTips;

public interface SysTipsService extends IService<SysTips> {
    Iterable<SysTips> findalltips();
}
