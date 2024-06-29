package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysUser;
import com.kakalog.main.mapper.SysUserMapper;
import com.kakalog.main.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户管理 服务实现类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public class SysUserServiceImpl extends ServiceImpl<SysUserMapper, SysUser> implements SysUserService {
    private final SysUserMapper sysUserMapper;

    @Autowired
    public SysUserServiceImpl(SysUserMapper sysUserMapper) {
        this.sysUserMapper = sysUserMapper;
    }

    public SysUser getUserbyname(String name){
        return sysUserMapper.getUserByname(name);
    }

    @Override
    public int findUserName(String name) {
        return sysUserMapper.findUserName(name);
    }


    public Iterable<SysUser> getAllSysUser() {
        return sysUserMapper.selectList(null);
    }

    public SysUser getUser(Long uid) {
        return sysUserMapper.selectById(uid);
    }

    public void addUser(SysUser sysUser) {
        sysUserMapper.insert(sysUser);
    }

    public void deleteUser(Long did) {
        sysUserMapper.deleteById(did);
    }

    public void updateUser(SysUser sysUser) {
        sysUserMapper.deleteById(sysUser.getUid());
        sysUserMapper.insert(sysUser);
    }

}
