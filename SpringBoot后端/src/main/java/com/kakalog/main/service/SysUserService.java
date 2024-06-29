package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysUser;

/**
 * <p>
 * 用户管理 服务类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
public interface SysUserService extends IService<SysUser> {
    Iterable<SysUser> getAllSysUser();

    SysUser getUser(Long did);

    void addUser(SysUser sysUser);

    void deleteUser(Long did);

    void updateUser(SysUser sysUser);

    SysUser getUserbyname(String name);

    int findUserName(String name);
}
