package com.kakalog.main.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kakalog.main.entity.SysDetail;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 * 详情管理 Mapper 接口
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Mapper
public interface SysDetailMapper extends BaseMapper<SysDetail> {
    @Select("SELECT * FROM sys_detail WHERE oid = #{oid} AND delFlag = 0")
    List<SysDetail> selectByoid(String oid);

    @Select("SELECT * FROM sys_detail WHERE oid = #{oid} AND kind = #{kind} AND delFlag = 0")
    List<SysDetail> selectByoidandkind(String oid,Integer kind);

    @Insert("insert into sys_detail(did,uid,oid,pid,name,quantity,caloricSum,delFlag,kind,specification,info,date) values(#{did}, #{uid}, #{oid}, #{pid}, #{name}, #{quantity}, #{caloricSum}, #{delFlag},#{kind},#{specification},#{info},#{date})")
    void insert(String did, Long uid, String oid, Long pid, String name, Integer quantity, Integer caloricSum, Integer delFlag, Integer kind, String specification, String info, String date);
}
