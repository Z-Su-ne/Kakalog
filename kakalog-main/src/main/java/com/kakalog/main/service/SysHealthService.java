package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysHealth;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 健康信息管理 服务类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public interface SysHealthService extends IService<SysHealth> {
    Iterable<SysHealth> getAllSysHealth();

    SysHealth getHealth(Long did);

    void addHealth(SysHealth sysHealth);

    void deleteHealth(Long did);

    void updateHealth(SysHealth sysHealth);
}
