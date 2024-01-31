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
import java.sql.Date;

/**
 * <p>
 * 订单管理
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class SysOrders extends Model<SysOrders> {

    private static final long serialVersionUID = 1L;

    /**
     * 订单编号
     */
    @TableId(value = "oid", type = IdType.AUTO)
    private String oid;

    /**
     * 用户编号
     */
    private Long uid;

    /**
     * 日期
     */
    private Date date;

    /**
     * 删除标志
     */
    @TableField("delFlag")
    private Integer delFlag;


    @Override
    protected Serializable pkVal() {
        return this.oid;
    }

    public String getOid() {
        return oid;
    }

    public long getUid() {
        return uid;
    }

    public Date getDate() {
        return date;
    }

    public int getDelFlag() {
        return delFlag;
    }

    // Setters
    public void setOid(String oid) {
        this.oid = oid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDelFlag(int delFlag) {
        this.delFlag = delFlag;
    }

}
