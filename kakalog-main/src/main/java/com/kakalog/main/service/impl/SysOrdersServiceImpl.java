package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysOrders;
import com.kakalog.main.mapper.SysOrdersMapper;
import com.kakalog.main.service.SysOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 订单管理 服务实现类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public class SysOrdersServiceImpl extends ServiceImpl<SysOrdersMapper, SysOrders> implements SysOrdersService {
    private final SysOrdersMapper sysOrdersMapper;

    @Autowired
    public SysOrdersServiceImpl(SysOrdersMapper sysOrdersMapper) {
        this.sysOrdersMapper = sysOrdersMapper;
    }

    public Iterable<SysOrders> getAllSysOrders() {
        return sysOrdersMapper.selectList(null);
    }

    public SysOrders getOrders(Long oid) {
        return sysOrdersMapper.selectById(oid);
    }

    public List<SysOrders> getOrdersbyuid(Long uid){
        return sysOrdersMapper.selectbyuid(uid);
    }

    public List<String> getSuffixOfOidByUidPrefix(String uid) {
        return sysOrdersMapper.getSuffixOfOidByUidPrefix(uid);
    }

    public  void addOrUpdOrder(Long uid,Date date){
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        String formattedDate = dateFormat.format(date);
        String oid = uid.toString() + formattedDate;
        int count = sysOrdersMapper.countOrdersByOidUidDate(oid);
        if (count == 0) {
            sysOrdersMapper.insert(oid, uid, (new java.sql.Date(date.getTime())),0);
        }
    }

    public void addOrders(Long uid,Date date) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        String formattedDate = dateFormat.format(date);
        String oid = uid.toString() + formattedDate;
//        SysOrders now = new SysOrders();
//        now.setOid(oid);
//        now.setDate(new java.sql.Date(date.getTime()));
//        now.setUid(uid);
//        now.setDelFlag(0);
        sysOrdersMapper.insert(oid,uid,(new java.sql.Date(date.getTime())),0);
    }

    public void deleteOrders(Long oid) {
        sysOrdersMapper.deleteById(oid);
    }

    public void updateOrders(SysOrders sysOrders) {
        sysOrdersMapper.deleteById(sysOrders.getOid());
        sysOrdersMapper.insert(sysOrders);
    }
}
