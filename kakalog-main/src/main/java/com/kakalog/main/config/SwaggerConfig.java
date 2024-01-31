package com.kakalog.main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @Description 集成swagger文档 本地访问地址 localhost:8000/swagger-ui.html
 * Failed to start bean ‘documentationPluginsBootstrapper’; nested exception is java.lang.NullPointerException错误
 * 解决办法：https://blog.51cto.com/gblfy/5652442
 * @Author 邹宇鹏
 * @Date 2023/10/14
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()//为当前包路径
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("KaKaLog REST API(Spring Boot 使用 Swagger2 构建REST API)")   //页面标题
                .contact(new Contact("hzw", "http://localhost:8000/swagger-ui.html", "zou.yp@qq.com"))   //创建人
                .description("KaKaLog REST API")    //描述
                .version("1.0")
                .build();
    }
}
