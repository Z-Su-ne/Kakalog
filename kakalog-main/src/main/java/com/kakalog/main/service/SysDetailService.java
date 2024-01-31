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

    List<SysDetail> getDetailByoidandkind(String oid ,Integer kind);

    void deleteDetail(Long did);

    void updateDetail(SysDetail sysDetail);
    void addDetails(Long uid, Long timestamp, Long pid, String name, Integer quantity, Integer caloricSum, Integer delFlag,Integer kind,String specification,String info);

}
