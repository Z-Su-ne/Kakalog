package com.kakalog.main;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(scanBasePackages = "com.kakalog.main")
@MapperScan("com.kakalog.main.mapper")
@EnableSwagger2
public class KakalogApplication {
    public static void main(String[] args) {
        SpringApplication.run(KakalogApplication.class, args);
    }
}
