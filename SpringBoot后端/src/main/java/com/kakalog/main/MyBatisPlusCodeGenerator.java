package com.kakalog.main;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.po.TableFill;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

import java.util.ArrayList;
import java.util.Scanner;

/**
 * @Description mybatis plus 代码生成器
 * <a href="https://blog.csdn.net/qq_45860901/article/details/125941798">教程网址</a>
 * @Author 邹宇鹏
 * @Date 2023/10/15
 */
public class MyBatisPlusCodeGenerator {
    public static void main(String[] args) {
        //创建代码生成器对象
        AutoGenerator autoGenerator = new AutoGenerator();

        // 1.全局配置
        GlobalConfig globalConfig = new GlobalConfig();

        globalConfig.setActiveRecord(true)//是否支持AR模式
                .setAuthor("hzw")//作者（可更换）
                .setOutputDir("D:\\Project\\kakalog\\kakalog-main\\src\\main\\java")//生成路径（可更换）
                .setOpen(false)//是否打开资源管理器
                .setFileOverride(true)//生成文件覆盖
                .setIdType(IdType.AUTO)//主键策略
                .setServiceName("%sService")//设置生成service接口的名字首字母是否为I
                .setDateType(DateType.ONLY_DATE)
                .setBaseResultMap(true)
                .setBaseColumnList(true);
        autoGenerator.setGlobalConfig(globalConfig);

        //2.设置数据源
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://106.54.212.16:3306/kakalog?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&characterEncoding=UTF-8");     //（需要更换）
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("new123");
        dsc.setDbType(DbType.MYSQL);
        autoGenerator.setDataSource(dsc);


        //3.包的配置
        PackageConfig pc = new PackageConfig();
        //  pc.setModuleName("mybatisplus");//设置模块名
        pc.setParent("com.kakalog.main");   //（需要更换）
        pc.setEntity("entity");   //（需要更换）
        pc.setMapper("mapper");  //（需要更换）
        pc.setXml("mapper.xml");  //（需要更换）
        pc.setService("service");  //（需要更换）
        pc.setController("controller");  //（需要更换）
        pc.setServiceImpl("service.impl");  //（需要更换）
        autoGenerator.setPackageInfo(pc);

        //4.策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setEntityLombokModel(true);        //自动lombok
        strategy.setRestControllerStyle(true);
        strategy.setControllerMappingHyphenStyle(true);


        strategy.setLogicDeleteFieldName("deleted");//设置逻辑删除的名字
        // 自动填充配置
        TableFill gmtCreate = new TableFill("gmt_create", FieldFill.INSERT);//设置自动填充创建时间
        TableFill gmtModified = new TableFill("gmt_modified", FieldFill.INSERT_UPDATE);//设置自动填充修改时间
        ArrayList<TableFill> tableFills = new ArrayList<>();
        tableFills.add(gmtCreate);
        tableFills.add(gmtModified);
        strategy.setTableFillList(tableFills);
        // 乐观锁
        strategy.setVersionFieldName("version");
        strategy.setRestControllerStyle(true);    //controller层使用rest风格

        strategy.setInclude(scanner("表名，多个英文逗号分割").split(","));
        autoGenerator.setStrategy(strategy);

        autoGenerator.execute();
    }

    public static String scanner(String tip) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder help = new StringBuilder();
        help.append("请输入" + tip + "：");
        System.out.println(help.toString());
        if (scanner.hasNext()) {
            String ipt = scanner.next();
            if (StringUtils.isNotBlank(ipt)) {
                return ipt;
            }
        }
        throw new MybatisPlusException("请输入正确的" + tip + "！");
    }
}
