package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysTips;
import com.kakalog.main.entity.SysUser;
import com.kakalog.main.mapper.SysTipsMapper;
import com.kakalog.main.service.SysTipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysTipsServiceImpl extends ServiceImpl<SysTipsMapper, SysTips> implements SysTipsService {
    private final SysTipsMapper sysTipsMapper;
    @Autowired
    public SysTipsServiceImpl(SysTipsMapper sysTipsMapper) {
        this.sysTipsMapper = sysTipsMapper;
    }
    public Iterable<SysTips> findalltips() {
        return sysTipsMapper.findalltips();
    }
}
