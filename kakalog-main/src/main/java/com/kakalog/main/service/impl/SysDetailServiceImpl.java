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

    public SysDetail getDetails(String did){
        return sysDetailMapper.selectById(did);
    }

    public void deleteDetail(Long did){
        sysDetailMapper.deleteById(did);
    }

    public void updateDetail(SysDetail sysDetail){
        sysDetailMapper.deleteById(sysDetail.getDid());
        sysDetailMapper.insert(sysDetail);
    }

    public List<SysDetail> getDetailsbyoid(String oid){
        return sysDetailMapper.selectByoid(oid);
    }

    public List<SysDetail> getDetailByoidandkind(String oid, Integer kind){
        return sysDetailMapper.selectByoidandkind(oid,kind);
    }

    public void addDetails(Long uid, Long timestamp, Long pid, String name, Integer quantity, Integer caloricSum, Integer delFlag,Integer kind,String specification,String info) {
        SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyyMMddHHmmss");
        Date date = new Date(timestamp);
        String formattedDate1 = dateFormat1.format(date);
        String formattedDate2 = dateFormat2.format(date);
        String oid = uid.toString() + formattedDate1;
        String did = uid.toString() + formattedDate2;
        sysDetailMapper.insert(did,uid,oid,pid,name,quantity,caloricSum,0,kind,specification,info,formattedDate1);
    }

}
