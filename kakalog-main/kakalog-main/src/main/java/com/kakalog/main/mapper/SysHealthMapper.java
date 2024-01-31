package com.kakalog.main.mapper;

import com.kakalog.main.entity.SysHealth;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;

/**
 * <p>
 * 健康信息管理 Mapper 接口
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Mapper
public interface SysHealthMapper extends BaseMapper<SysHealth> {
    @Insert("insert into sys_health(uid,sex,age,height,weightTarget,bmi,weightCurrent,weightLast,caloriesDaily) values(#{uid},#{sex},#{age},#{height},#{weightTarget},#{bmi},#{weightCurrent},#{weightLast},#{caloriesDaily})")
    public void insert(@Param("uid") String uid, @Param("sex") String sex, @Param("age") Integer age,
                 @Param("height") Integer height, @Param("weightTarget") Double weightTarget, @Param("bmi") Double bmi, @Param("weightCurrent") Double weightCurrent, @Param("weightLast") Double weightLast, @Param("caloriesDaily") Integer caloriesDaily);
}
