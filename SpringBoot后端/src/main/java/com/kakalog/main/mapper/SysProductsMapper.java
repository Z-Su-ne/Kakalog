package com.kakalog.main.mapper;

import com.kakalog.main.entity.SysDetail;
import com.kakalog.main.entity.SysProducts;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 * 产品管理 Mapper 接口
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Mapper
public interface SysProductsMapper extends BaseMapper<SysProducts> {
    @Select("select * from sys_products where delFlag = 0")
    List<SysProducts> getall();

    @Select("SELECT * FROM sys_products WHERE pid = #{pid} AND delFlag = 0")
    List<SysProducts> getProductsBypid(@Param("pid") Long pid);

    @Select("SELECT * FROM sys_products WHERE uid = #{uid} AND delFlag = 0")
    List<SysProducts> getProductsByuid(@Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE name = #{name} AND delFlag = 0")
    List<SysProducts> getProductsByname(@Param("name") String name);

    @Select("SELECT * FROM sys_products WHERE kind = #{kind} AND delFlag = 0 AND (uid=0 or uid = #{uid})")
    List<SysProducts> getProductsBykind(@Param("kind") Integer kind, @Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE kind!=0 AND (kind = 1 or kind =3)  AND delFlag = 0 AND (uid=0 or uid = #{uid})")
    List<SysProducts> getProductsBykind1(@Param("kind") Integer kind, @Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE kind!=0 AND (kind = 2 or kind =4) AND delFlag = 0 AND (uid=0 or uid = #{uid})")
    List<SysProducts> getProductsBykind2(@Param("kind") Integer kind, @Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE kind!=0 AND kind !=1 AND kind !=2 AND delFlag = 0 AND uid = #{uid}")
    List<SysProducts> getProductsBykind3(@Param("kind") Integer kind, @Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE kind!=0 AND delFlag = 0 AND (uid=0 or uid = #{uid})")
    List<SysProducts> getProductsBykind0(@Param("kind") Integer kind,@Param("uid") Long uid);

    @Select("SELECT * FROM sys_products WHERE specification = #{specification} AND delFlag = 0")
    List<SysProducts> getProductsByspecification(@Param("specification") String specification);

    @Select("SELECT * FROM sys_products WHERE info = #{info} AND delFlag = 0")
    List<SysProducts> getProductsByinfo(@Param("info") String info);

    @Select("SELECT * FROM sys_products WHERE caloric = #{caloric} AND delFlag = 0")
    List<SysProducts> getProductsBycaloric(@Param("caloric") Double caloric);
}
