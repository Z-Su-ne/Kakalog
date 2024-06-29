package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysProducts;
import com.kakalog.main.mapper.SysProductsMapper;
import com.kakalog.main.service.SysProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 产品管理 服务实现类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public class SysProductsServiceImpl extends ServiceImpl<SysProductsMapper, SysProducts> implements SysProductsService {
    private final SysProductsMapper sysProductsMapper;

    @Autowired
    public SysProductsServiceImpl(SysProductsMapper sysProductsMapper) {
        this.sysProductsMapper = sysProductsMapper;
    }

    public Iterable<SysProducts> getAllSysProducts() {
        return sysProductsMapper.getall();
    }

    public List<SysProducts> getProductsBypid(Long pid) {
        return sysProductsMapper.getProductsBypid(pid);
    }

    public List<SysProducts> getProductsByuid(Long uid) {
        return sysProductsMapper.getProductsByuid(uid);
    }

    public List<SysProducts> getProductsByname(String name) {
        return sysProductsMapper.getProductsByname(name);
    }

    public List<SysProducts> getProductsBykind(Integer kind, Long uid) {
        return sysProductsMapper.getProductsBykind(kind, uid);
    }

    public List<SysProducts> getProductsBykind1(Integer kind, Long uid) {
        return sysProductsMapper.getProductsBykind1(kind, uid);
    }

    public List<SysProducts> getProductsBykind2(Integer kind, Long uid) {
        return sysProductsMapper.getProductsBykind2(kind, uid);
    }

    public List<SysProducts> getProductsBykind3(Integer kind, Long uid) {
        return sysProductsMapper.getProductsBykind3(kind, uid);
    }

//    @Override
    public List<SysProducts> getProductsBykind0(Integer kind, Long uid) {
        return sysProductsMapper.getProductsBykind0(kind,uid);
    }

//    public List<SysProducts> getProductsBykind0(Long pid) {
//        return sysProductsMapper.getProductsBykind0(pid);
//    }

    public List<SysProducts> getProductsByspecification(String specification) {
        return sysProductsMapper.getProductsByspecification(specification);
    }

    public List<SysProducts> getProductsByinfo(String info) {
        return sysProductsMapper.getProductsByinfo(info);
    }

    public List<SysProducts> getProductsBycaloric(Double caloric) {
        return sysProductsMapper.getProductsBycaloric(caloric);
    }

    public void addProducts(SysProducts sysProducts) {
        sysProductsMapper.insert(sysProducts);
    }

    public void deleteProducts(Long did) {
        sysProductsMapper.deleteById(did);
    }

    public void updateProducts(SysProducts sysProducts) {
//        sysProductsMapper.deleteById(sysProducts.getPid());
//        sysProductsMapper.insert(sysProducts);
        sysProductsMapper.updateById(sysProducts);
    }
}
