package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysProducts;

import java.util.List;

/**
 * <p>
 * 产品管理 服务类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
public interface SysProductsService extends IService<SysProducts> {
    Iterable<SysProducts> getAllSysProducts();

    void addProducts(SysProducts sysProducts);

    void deleteProducts(Long did);

    void updateProducts(SysProducts sysProducts);

    List<SysProducts> getProductsBypid(Long pid);

    List<SysProducts> getProductsByuid(Long uid);

    List<SysProducts> getProductsByname(String name);

    List<SysProducts> getProductsBykind1(Integer kind, Long uid);

    List<SysProducts> getProductsBykind2(Integer kind, Long uid);

    List<SysProducts> getProductsBykind3(Integer kind, Long uid);

    List<SysProducts> getProductsBykind(Integer kind, Long uid);

    List<SysProducts> getProductsBykind0(Integer kind, Long uid);

    List<SysProducts> getProductsByspecification(String specification);

    List<SysProducts> getProductsByinfo(String info);

    List<SysProducts> getProductsBycaloric(Double caloric);
}
