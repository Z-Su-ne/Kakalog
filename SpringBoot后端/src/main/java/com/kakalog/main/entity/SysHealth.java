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
    private Double height;

    /**
     * 目标体重
     */
    @TableField("weightTarget")
    private Double weightTarget;

    /**
     * 身体质量指数
     */
    private Double bmi;

    /**
     * 当前体重
     */
    @TableField("weightCurrent")
    private Double weightCurrent;

    /**
     * 上次体重
     */
    @TableField("weightLast")
    private Double weightLast;

    /**
     * 每日卡路里摄入量
     */
    @TableField("caloriesDaily")
    private Double caloriesDaily;


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


    public Double getWeightLast() {
        return weightLast;
    }

    public void setWeightLast(Double weightLast) {
        this.weightLast = weightLast;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeightTarget() {
        return weightTarget;
    }

    public void setWeightTarget(Double weightTarget) {
        this.weightTarget = weightTarget;
    }

    public Double getBmi() {
        return bmi;
    }

    public void setBmi(Double bmi) {
        this.bmi = bmi;
    }

    public Double getWeightCurrent() {
        return weightCurrent;
    }

    public void setWeightCurrent(Double weightCurrent) {
        this.weightCurrent = weightCurrent;
    }

    public Double getCaloriesDaily() {
        return caloriesDaily;
    }

    public void setCaloriesDaily(Double caloriesDaily) {
        this.caloriesDaily = caloriesDaily;
    }
}
