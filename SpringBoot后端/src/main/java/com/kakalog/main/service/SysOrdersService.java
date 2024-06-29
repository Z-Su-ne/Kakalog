package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysOrders;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 订单管理 服务类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
public interface SysOrdersService extends IService<SysOrders> {
    Iterable<SysOrders> getAllSysOrders();

    List<SysOrders> getOrdersbyuid(Long uid);

    void addOrUpdOrder(Long uid,Date date);

    List<String> getSuffixOfOidByUidPrefix(String uid);

    SysOrders getOrders(Long did);

    void addOrders(Long uid,Date date);

    void deleteOrders(Long did);

    void updateOrders(SysOrders sysOrders);
}
