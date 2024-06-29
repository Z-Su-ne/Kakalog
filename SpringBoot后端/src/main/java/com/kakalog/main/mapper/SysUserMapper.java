package com.kakalog.main.mapper;

import com.kakalog.main.entity.SysUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 用户管理 Mapper 接口
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Mapper
public interface SysUserMapper extends BaseMapper<SysUser> {
    @Select("select * from sys_user where name = #{name} AND del_Flag = 0")
    public SysUser getUserByname(String name);

    @Insert("insert into sys_user(uid,name,nick_name,avatar,password,email,mobile,del_flag) values(#{uid},#{name},#{nickName},#{avatar},#{password},#{email},#{mobile},#{delFlag})")
    public int insert(SysUser user);

    @Select("select count(*) from sys_user where name = #{name} AND del_Flag = 0")
    public int findUserName(String name);
}
