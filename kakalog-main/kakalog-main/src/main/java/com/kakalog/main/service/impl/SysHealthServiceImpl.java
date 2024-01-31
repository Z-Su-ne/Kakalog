package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysHealth;
import com.kakalog.main.mapper.SysHealthMapper;
import com.kakalog.main.service.SysHealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 健康信息管理 服务实现类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public class SysHealthServiceImpl extends ServiceImpl<SysHealthMapper, SysHealth> implements SysHealthService {
    private final SysHealthMapper sysHealthMapper;

    @Autowired
    public SysHealthServiceImpl(SysHealthMapper sysHealthMapper) {
        this.sysHealthMapper = sysHealthMapper;
    }

    public Iterable<SysHealth> getAllSysHealth() {
        return sysHealthMapper.selectList(null);
    }

    public SysHealth getHealth(Long uid) {
        return sysHealthMapper.selectById(uid);
    }

    public void addHealth(SysHealth sysHealth) {
        sysHealthMapper.insert(sysHealth);
    }

    public void deleteHealth(Long did) {
        sysHealthMapper.deleteById(did);
    }

    public void updateHealth(SysHealth sysHealth) {
        sysHealthMapper.deleteById(sysHealth.getUid());
        sysHealthMapper.insert(sysHealth);
    }
}
