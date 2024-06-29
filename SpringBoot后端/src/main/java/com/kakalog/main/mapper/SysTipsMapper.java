package com.kakalog.main.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kakalog.main.entity.SysTips;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface SysTipsMapper extends BaseMapper<SysTips> {
    @Select("select * from sys_tips")
    List<SysTips> findalltips();
}
