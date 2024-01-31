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
 * 产品管理
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class SysProducts extends Model<SysProducts> {

    private static final long serialVersionUID = 1L;

    /**
     * 产品编号
     */
    @TableId(value = "pid", type = IdType.AUTO)
    private Long pid;

    /**
     * 创建用户编号
     */
    private Long uid;

    /**
     * 名称
     */
    private String name;

    /**
     * 类别
     */
    private Integer kind;

    /**
     * 规格
     */
    private String specification;

    /**
     * 信息
     */
    private String info;

    /**
     * 卡路里
     */
    private Integer caloric;

    /**
     * 删除标志
     */
    @TableField("delFlag")
    private Integer delFlag;


    @Override
    protected Serializable pkVal() {
        return this.pid;
    }

    public long getPid() {
        return pid;
    }

    public long getUid() {
        return uid;
    }

    public String getName() {
        return name;
    }

    public Integer getKind() {
        return kind;
    }

    public String getSpecification() {
        return specification;
    }

    public String getInfo() {
        return info;
    }

    public Integer getCaloric() {
        return caloric;
    }

    public int getDelFlag() {
        return delFlag;
    }

    // Setters
    public void setPid(long pid) {
        this.pid = pid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setKind(Integer kind) {
        this.kind = kind;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setCaloric(Integer caloric) {
        this.caloric = caloric;
    }

    public void setDelFlag(int delFlag) {
        this.delFlag = delFlag;
    }
}
