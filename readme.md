## kakalog/卡卡记账
一个基于SpringBoot和微信小程序的热量记账应用

## 项目功能介绍
1. 基于SpringBoot和微信小程序的热量记账应用
2. 用户可以添加账目类别
3. 用户可以添加账目记录
4. 用户可以查看账目记录
5. 用户可以注册登陆
6. 接入讯飞星火大模型，可以实现智能问答
7. 其他功能开发中

## 技术架构
- Spring Boot 2.7.16
- Swagger2
- MySQL 5.7.40
- mybatis-plus 3.5.5
- Java 22
- Maven 3.8.4

## 项目运行
### 后端
1. 克隆项目到本地
2. 建立数据库，并导入项目src/main/resources/sql下的`kakalog.sql`文件
3. 修改`application.yml`文件中的数据库连接信息
4. 注册讯飞星火大模型，并修改com.kakalog.main.AI.WeChatAIApiClient中 `API信息:AK和SK`
5. 运行`KakalogApplication.java`文件
### 前端
1. 克隆项目到本地
2. 安装微信开发者工具
3. 在微信开发者工具中导入项目
4. 修改`app.js`文件中的`appid`
5. 进行npm构建
6. 运行项目