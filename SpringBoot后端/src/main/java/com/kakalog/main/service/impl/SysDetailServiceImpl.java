package com.kakalog.main.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.kakalog.main.entity.SysDetail;
import com.kakalog.main.mapper.SysDetailMapper;
import com.kakalog.main.service.SysDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 详情管理 服务实现类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public class SysDetailServiceImpl extends ServiceImpl<SysDetailMapper, SysDetail> implements SysDetailService {
    private final SysDetailMapper sysDetailMapper;

    @Autowired
    public SysDetailServiceImpl(SysDetailMapper sysDetailMapper) {
        this.sysDetailMapper = sysDetailMapper;
    }

    public Iterable<SysDetail> getAllDetails() {
        return sysDetailMapper.selectList(null);
    }

    public SysDetail getDetails(String did) {
        return sysDetailMapper.selectById(did);
    }

    public void deleteDetail(String did) {
        sysDetailMapper.deleteById(did);
    }

    public void updateDetail(SysDetail sysDetail) {
        sysDetailMapper.deleteById(sysDetail.getDid());
        sysDetailMapper.insert(sysDetail);
    }

    public List<SysDetail> getDetailsbyoid(String oid) {
        return sysDetailMapper.selectByoid(oid);
    }

    public List<SysDetail> getDetailByoidandkind(String oid, String kind) {
        System.out.println(oid);
        System.out.println(kind);
        return sysDetailMapper.selectByoidandkind(oid, kind);
    }

    public List<SysDetail> getDetailByresultandkind(String result, String kind) {
        System.out.println(result);
        System.out.println(kind);
        return sysDetailMapper.selectByresultandkind(result, kind);
    }

    public List<SysDetail> getDetailByresultandkind1(String result, String kind) {
        System.out.println(result);
        System.out.println(kind);
        return sysDetailMapper.selectByresultandkind1(result, kind);
    }

    public List<SysDetail> getDetailByresultandkind2(String result, String kind) {
        System.out.println(result);
        System.out.println(kind);
        return sysDetailMapper.selectByresultandkind2(result, kind);
    }

    public List<SysDetail> getDetailByresultandkind3(String result, String kind) {
        System.out.println(result);
        System.out.println(kind);
        return sysDetailMapper.selectByresultandkind3(result, kind);
    }

    public Iterable<SysDetail> getDetailBykind0(String result) {
        return sysDetailMapper.selectBykind0(result);
    }

    public void addDetails(Long uid, Long timestamp, Long pid, String name, Integer quantity, Integer caloricSum, Integer delFlag, Integer kind, String specification, String info) {
        SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyyMMddHHmmss");
        Date date = new Date(timestamp);
        String formattedDate1 = dateFormat1.format(date);
        String formattedDate2 = dateFormat2.format(date);
        String oid = uid.toString() + formattedDate1;
        String did = uid.toString() + formattedDate2;
        sysDetailMapper.insert(did, uid, oid, pid, name, quantity, caloricSum, 0, kind, specification, info, String.valueOf(formattedDate1));
    }

    @Override
    public String selectDateSumByUidAndDate(Long uid, String date) {
        Date d = new Date(); // 当前日期和时间
        SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyyMMdd");
        String Date = dateFormat1.format(d);
        System.out.println(Date);
        return sysDetailMapper.selectDateSumByUidAndDate(uid, Date);
    }

    @Override
    public int selectCountDayByUid(Long uid) {

        return sysDetailMapper.selectCountDayByUid(uid);
    }

    @Override
    public int selectCountOrderByUid(Long uid) {
        return sysDetailMapper.selectCountOrderByUid(uid);
    }


    @Override
    public String selectCountCaloricByUid(Long uid) {

        return sysDetailMapper.selectCountCaloricByUid(uid);
    }

    @Override
    public void updateDel(String did) {
        sysDetailMapper.updateDel(did);
    }


}
