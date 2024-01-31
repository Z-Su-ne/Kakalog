package com.kakalog.main.mapper;

import com.kakalog.main.entity.SysOrders;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.sql.Date;
import java.util.List;

/**
 * <p>
 * 订单管理 Mapper 接口
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Mapper
public interface SysOrdersMapper extends BaseMapper<SysOrders> {
    @Select("SELECT COUNT(*) FROM sys_orders WHERE oid = #{oid} AND delFlag = 0")
    int countOrdersByOidUidDate(@Param("oid") String oid);

    @Select("SELECT * FROM sys_orders WHERE uid = #{uid} AND delFlag = 0")
    List<SysOrders> selectbyuid(@Param("uid") Long uid);

    @Select("SELECT SUBSTRING(oid, CHAR_LENGTH(#{uid}) + 1) AS suffix FROM sys_orders WHERE oid LIKE CONCAT(#{uid}, '%')")
    List<String> getSuffixOfOidByUidPrefix(@Param("uid") String uid);

    @Insert("insert into sys_orders(oid,uid,date,delFlag) values(#{oid},#{uid},#{date},#{delFlag})")
    void insert(@Param("oid") String oid, @Param("uid") Long uid, @Param("date") Date date, @Param("delFlag") int delFlag);
}
