package com.kakalog.main.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * <p>
 * 健康信息管理
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class SysHealth extends Model<SysHealth> {

    private static final long serialVersionUID = 1L;

    /**
     * 用户编号
     */
    @TableId(value = "uid", type = IdType.AUTO)
    private Long uid;

    /**
     * 性别
     */
    private String sex;

    /**
     * 年龄
     */
    private Integer age;

    /**
     * 身高
     */
    private Integer height;

    /**
     * 目标体重
     */
    @TableField("weightTarget")
    private Integer weightTarget;

    /**
     * 身体质量指数
     */
    private Integer bmi;

    /**
     * 当前体重
     */
    @TableField("weightCurrent")
    private Integer weightCurrent;

    /**
     * 上次体重
     */
    @TableField("weightLast")
    private Integer weightLast;

    /**
     * 每日卡路里摄入量
     */
    @TableField("caloriesDaily")
    private Integer caloriesDaily;


    @Override
    protected Serializable pkVal() {
        return this.uid;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeightTarget() {
        return weightTarget;
    }

    public void setWeightTarget(Integer weightTarget) {
        this.weightTarget = weightTarget;
    }

    public Integer getBmi() {
        return bmi;
    }

    public void setBmi(Integer bmi) {
        this.bmi = bmi;
    }

    public Integer getWeightCurrent() {
        return weightCurrent;
    }

    public void setWeightCurrent(Integer weightCurrent) {
        this.weightCurrent = weightCurrent;
    }

    public Integer getWeightLast() {
        return weightLast;
    }

    public void setWeightLast(Integer weightLast) {
        this.weightLast = weightLast;
    }

    public Integer getCaloriesDaily() {
        return caloriesDaily;
    }

    public void setCaloriesDaily(Integer caloriesDaily) {
        this.caloriesDaily = caloriesDaily;
    }
}
