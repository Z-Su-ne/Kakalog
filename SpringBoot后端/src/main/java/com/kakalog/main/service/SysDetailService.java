package com.kakalog.main.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kakalog.main.entity.SysDetail;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 详情管理 服务类
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Service
public interface SysDetailService extends IService<SysDetail> {
    Iterable<SysDetail> getAllDetails();

    SysDetail getDetails(String did);

    List<SysDetail> getDetailsbyoid(String oid);

    Iterable<SysDetail> getDetailByoidandkind(String oid, String kind);

    Iterable<SysDetail> getDetailByresultandkind(String result, String kind);

    Iterable<SysDetail> getDetailByresultandkind1(String result, String kind);

    Iterable<SysDetail> getDetailByresultandkind2(String result, String kind);

    Iterable<SysDetail> getDetailByresultandkind3(String result, String kind);

    Iterable<SysDetail> getDetailBykind0(String result);

    void deleteDetail(String did);

    void updateDetail(SysDetail sysDetail);

    void addDetails(Long uid, Long timestamp, Long pid, String name, Integer quantity, Integer caloricSum, Integer delFlag, Integer kind, String specification, String info);

    String selectDateSumByUidAndDate(Long uid, String date);

    int selectCountDayByUid(Long uid);

    int selectCountOrderByUid(Long uid);

    String selectCountCaloricByUid(Long uid);

    void updateDel(String did);

}
