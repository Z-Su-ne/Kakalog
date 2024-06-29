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
 * 详情管理
 * </p>
 *
 * @author hzw
 * @since 2023-12-03
 */
@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
public class SysDetail extends Model<SysDetail> {

    private static final long serialVersionUID = 1L;


    /**
     * 详细信息编号
     */
    @TableId(value = "did", type = IdType.AUTO)
    private String did;

    /**
     * 用户编号
     */
    private Long uid;

    /**
     * 订单编号
     */
    private String oid;

    /**
     * 信息
     */
    private String info;

    /**
     * 日期
     */
    private String date;

    /**
     * 产品编号
     */
    private Long pid;

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
     * 数量
     */
    private Integer quantity;

    /**
     * 卡路里总数
     */
    @TableField("caloricSum")
    private Integer caloricSum;

    /**
     * 删除标志
     */

    @TableField("delFlag")
    private Integer delFlag;


    @Override
    protected Serializable pkVal() {
        return this.did;
    }

    public String getDid() {
        return did;
    }

    public long getUid() {
        return uid;
    }

    public String getOid() {
        return oid;
    }

    public long getPid() {
        return pid;
    }

    public String getName() {
        return name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Integer getCaloricSum() {
        return caloricSum;
    }

    public int getDelFlag() {
        return delFlag;
    }

    // Setters
    public void setDid(String did) {
        this.did = did;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public void setOid(String oid) {
        this.oid = oid;
    }

    public void setPid(long pid) {
        this.pid = pid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setCaloricSum(Integer caloricSum) {
        this.caloricSum = caloricSum;
    }

    public void setDelFlag(int delFlag) {
        this.delFlag = delFlag;
    }

}
