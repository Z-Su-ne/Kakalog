/*
 Navicat Premium Data Transfer

 Source Server         : kakalog
 Source Server Type    : MySQL
 Source Server Version : 50743
 Source Host           :
 Source Schema         : kakalog

 Target Server Type    : MySQL
 Target Server Version : 50743
 File Encoding         : 65001

 Date: 31/01/2024 22:08:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_detail
-- ----------------------------
DROP TABLE IF EXISTS `sys_detail`;
CREATE TABLE `sys_detail`  (
  `did` varchar(22) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '详细信息编号',
  `uid` bigint(20) NOT NULL COMMENT '用户编号',
  `oid` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '订单编号',
  `pid` bigint(20) NOT NULL COMMENT '产品编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `quantity` int(11) NULL DEFAULT NULL COMMENT '数量',
  `kind` int(11) NULL DEFAULT NULL COMMENT '类别',
  `specification` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '规格',
  `info` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '信息',
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日期',
  `caloricSum` int(11) NULL DEFAULT NULL COMMENT '卡路里总数',
  `delFlag` tinyint(4) NULL DEFAULT 0 COMMENT '删除标志',
  PRIMARY KEY (`did`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '详情管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_detail
-- ----------------------------
INSERT INTO `sys_detail` VALUES ('3210116420240108163409', 32101164, '3210116420240108', 32, '走路（慢）        ', 1, 2, '60分钟        ', '这是北校操场        ', '20240108', -139, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240108163419', 32101164, '3210116420240108', 11, '小葱拌豆腐        ', 1, 1, '100克        ', '这是晨苑的        ', '20240108', 37, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240109163304', 32101164, '3210116420240109', 1, '米饭        ', 3, 1, '100克        ', '这是北秀的        ', '20240109', 348, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240109163311', 32101164, '3210116420240109', 32, '走路（慢）        ', 1, 2, '60分钟        ', '这是北校操场        ', '20240109', -139, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240109163334', 32101164, '3210116420240109', 20, '豆浆        ', 1, 1, '1杯        ', '这是工程师的        ', '20240109', 85, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240109163344', 32101164, '3210116420240109', 7, '小葱拌豆腐        ', 1, 1, '100克        ', '这是北秀的        ', '20240109', 37, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240109163358', 32101164, '3210116420240109', 39, '快走(64kl/h)        ', 1, 2, '60分钟        ', '这是南校风雨操场        ', '20240109', -429, 1);
INSERT INTO `sys_detail` VALUES ('3210116420240109163437', 32101164, '3210116420240109', 18, '芝士焗红薯        ', 2, 1, '100克        ', '这是小舟东的        ', '20240109', 322, 0);
INSERT INTO `sys_detail` VALUES ('3210116420240113163944', 32101164, '3210116420240113', 1, '米饭        ', 3, 1, '100克        ', '这是北秀的        ', '20240113', 348, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231225134243', 32105531, '3210553120231225', 1, '米饭        ', 1, 1, '100克        ', '这是北秀的        ', '20231225', 116, 1);
INSERT INTO `sys_detail` VALUES ('3210553120231225134306', 32105531, '3210553120231225', 42, '快走（6.4km/h）        ', 1, 2, '60分钟        ', '这是氧适堡（已跑路）        ', '20231225', -429, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231225134352', 32105531, '3210553120231225', 51, '冬日睡大觉        ', 1, 3, '早八太多辣        ', '被窝太冷        ', '20231225', -512, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231225134402', 32105531, '3210553120231225', 51, '冬日睡大觉        ', 4, 3, '早八太多辣        ', '被窝太冷        ', '20231225', -2048, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231225163217', 32105531, '3210553120231225', 4, '米饭        ', 1, 1, '100克        ', '这是二食堂的        ', '20231225', 116, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231226134257', 32105531, '3210553120231226', 32, '走路（慢）        ', 1, 2, '60分钟        ', '这是北校操场        ', '20231226', -139, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231226134319', 32105531, '3210553120231226', 13, '芝士焗红薯        ', 3, 1, '100克        ', '这是北秀的        ', '20231226', 483, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231226134331', 32105531, '3210553120231226', 24, '豆浆        ', 1, 1, '1杯        ', '这是小舟东的        ', '20231226', 85, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231226163316', 32105531, '3210553120231226', 50, '善贤麦当当        ', 1, 3, '就是有点远        ', '分量太少        ', '20231226', 2048, 0);
INSERT INTO `sys_detail` VALUES ('3210553120231226232229', 32105531, '3210553120231226', 26, '没说就是0卡        ', 1, 1, '100克        ', '这是工程师的        ', '20231226', 0, 1);
INSERT INTO `sys_detail` VALUES ('3210553120231227163332', 32105531, '3210553120231227', 51, '冬日睡大觉        ', 1, 3, '早八太多辣        ', '被窝太冷        ', '20231227', -512, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240107145630', 32105531, '3210553120240107', 2, '米饭        ', 1, 1, '100克        ', '这是工程师的        ', '20240107', 116, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240107154511', 32105531, '3210553120240107', 1, '米饭        ', 3, 1, '100克        ', '这是北秀的        ', '20240107', 348, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240108103912', 32105531, '3210553120240108', 1, '米饭        ', 1, 1, '100克        ', '这是北秀的        ', '20240108', 116, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240108104537', 32105531, '3210553120240108', 32, '走路（慢）        ', 1, 2, '60分钟        ', '这是北校操场        ', '20240108', -139, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240108143508', 32105531, '3210553120240108', 7, '小葱拌豆腐        ', 1, 1, '100克        ', '这是北秀的        ', '20240108', 37, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240108160814', 32105531, '3210553120240108', 1, '米饭        ', 0, 1, '100克        ', '这是北秀的        ', '20240108', 0, 0);
INSERT INTO `sys_detail` VALUES ('3210553120240108163856', 32105531, '3210553120240108', 1, '米饭        ', 1, 1, '100克        ', '这是北秀的        ', '20240108', 116, 0);

-- ----------------------------
-- Table structure for sys_health
-- ----------------------------
DROP TABLE IF EXISTS `sys_health`;
CREATE TABLE `sys_health`  (
  `uid` bigint(20) NOT NULL COMMENT '用户编号',
  `sex` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `age` int(11) NULL DEFAULT NULL COMMENT '年龄',
  `height` int(11) NULL DEFAULT NULL COMMENT '身高',
  `weightTarget` int(11) NULL DEFAULT NULL COMMENT '目标体重',
  `bmi` int(11) NULL DEFAULT NULL COMMENT '身体质量指数',
  `weightCurrent` int(11) NULL DEFAULT NULL COMMENT '当前体重',
  `weightLast` int(11) NULL DEFAULT NULL COMMENT '上次体重',
  `caloriesDaily` int(11) NULL DEFAULT NULL COMMENT '每日卡路里摄入量',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '健康信息管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_health
-- ----------------------------
INSERT INTO `sys_health` VALUES (1, '男', 10, 1, 30, 300000, 30, 0, 1000);
INSERT INTO `sys_health` VALUES (4, '男', 10, 120, 34, 20, 30, 0, 1000);
INSERT INTO `sys_health` VALUES (5, 'null', 0, 0, 0, 0, 0, 0, 1000);
INSERT INTO `sys_health` VALUES (8, 'null', 0, 0, 0, 0, 0, 0, 1000);
INSERT INTO `sys_health` VALUES (9, 'null', 0, 0, 0, 0, 0, 0, 1000);
INSERT INTO `sys_health` VALUES (11, '男', 32, 180, 48, 20, 68, 0, 1000);
INSERT INTO `sys_health` VALUES (5555555, 'null', 0, 0, 0, 0, 0, 0, 1000);
INSERT INTO `sys_health` VALUES (32101147, '女', 21, 180, 70, 22, 72, 0, 1000);
INSERT INTO `sys_health` VALUES (32101164, '男', 21, 180, 70, 23, 75, 10, 1000);
INSERT INTO `sys_health` VALUES (32105531, '男', 25, 180, 45, 20, 65, 10, 1000);

-- ----------------------------
-- Table structure for sys_orders
-- ----------------------------
DROP TABLE IF EXISTS `sys_orders`;
CREATE TABLE `sys_orders`  (
  `oid` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '订单编号',
  `uid` bigint(20) NOT NULL COMMENT '用户编号',
  `date` date NULL DEFAULT NULL COMMENT '日期',
  `delFlag` tinyint(4) NULL DEFAULT 0 COMMENT '删除标志',
  PRIMARY KEY (`oid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_orders
-- ----------------------------
INSERT INTO `sys_orders` VALUES ('3210116420240108', 32101164, '2024-01-08', 0);
INSERT INTO `sys_orders` VALUES ('3210116420240109', 32101164, '2024-01-09', 0);
INSERT INTO `sys_orders` VALUES ('3210116420240113', 32101164, '2024-01-13', 0);
INSERT INTO `sys_orders` VALUES ('3210553120231225', 32105531, '2023-12-25', 0);
INSERT INTO `sys_orders` VALUES ('3210553120231226', 32105531, '2023-12-26', 0);
INSERT INTO `sys_orders` VALUES ('3210553120231227', 32105531, '2023-12-27', 0);
INSERT INTO `sys_orders` VALUES ('3210553120240107', 32105531, '2024-01-07', 0);
INSERT INTO `sys_orders` VALUES ('3210553120240108', 32105531, '2024-01-08', 0);

-- ----------------------------
-- Table structure for sys_products
-- ----------------------------
DROP TABLE IF EXISTS `sys_products`;
CREATE TABLE `sys_products`  (
  `pid` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '产品编号',
  `uid` bigint(20) NOT NULL COMMENT '创建用户编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `kind` int(11) NULL DEFAULT NULL COMMENT '类别',
  `specification` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '规格',
  `info` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '信息',
  `caloric` int(11) NULL DEFAULT NULL COMMENT '卡路里',
  `delFlag` tinyint(4) NULL DEFAULT 0 COMMENT '删除标志',
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_products
-- ----------------------------
INSERT INTO `sys_products` VALUES (1, 0, '米饭', 1, '100克', '这是北秀的', 116, 0);
INSERT INTO `sys_products` VALUES (2, 0, '米饭', 1, '100克', '这是工程师的', 116, 0);
INSERT INTO `sys_products` VALUES (3, 0, '米饭', 1, '100克', '这是学苑的', 116, 0);
INSERT INTO `sys_products` VALUES (4, 0, '米饭', 1, '100克', '这是二食堂的', 116, 0);
INSERT INTO `sys_products` VALUES (5, 0, '米饭', 1, '100克', '这是晨苑的', 116, 0);
INSERT INTO `sys_products` VALUES (6, 0, '米饭', 1, '100克', '这是小舟东的', 116, 0);
INSERT INTO `sys_products` VALUES (7, 0, '小葱拌豆腐', 1, '100克', '这是北秀的', 37, 0);
INSERT INTO `sys_products` VALUES (8, 0, '小葱拌豆腐', 1, '100克', '这是工程师的', 37, 0);
INSERT INTO `sys_products` VALUES (9, 0, '小葱拌豆腐', 1, '100克', '这是学苑的', 37, 0);
INSERT INTO `sys_products` VALUES (10, 0, '小葱拌豆腐', 1, '100克', '这是二食堂的', 37, 0);
INSERT INTO `sys_products` VALUES (11, 0, '小葱拌豆腐', 1, '100克', '这是晨苑的', 37, 0);
INSERT INTO `sys_products` VALUES (12, 0, '小葱拌豆腐', 1, '100克', '这是小舟东的', 37, 0);
INSERT INTO `sys_products` VALUES (13, 0, '芝士焗红薯', 1, '100克', '这是北秀的', 161, 0);
INSERT INTO `sys_products` VALUES (14, 0, '芝士焗红薯', 1, '100克', '这是工程师的', 161, 0);
INSERT INTO `sys_products` VALUES (15, 0, '芝士焗红薯', 1, '100克', '这是学苑的', 161, 0);
INSERT INTO `sys_products` VALUES (16, 0, '芝士焗红薯', 1, '100克', '这是二食堂的', 161, 0);
INSERT INTO `sys_products` VALUES (17, 0, '芝士焗红薯', 1, '100克', '这是晨苑的', 161, 0);
INSERT INTO `sys_products` VALUES (18, 0, '芝士焗红薯', 1, '100克', '这是小舟东的', 161, 0);
INSERT INTO `sys_products` VALUES (19, 0, '豆浆', 1, '1杯', '这是北秀的', 85, 0);
INSERT INTO `sys_products` VALUES (20, 0, '豆浆', 1, '1杯', '这是工程师的', 85, 0);
INSERT INTO `sys_products` VALUES (21, 0, '豆浆', 1, '1杯', '这是学苑的', 85, 0);
INSERT INTO `sys_products` VALUES (22, 0, '豆浆', 1, '1杯', '这是二食堂的', 85, 0);
INSERT INTO `sys_products` VALUES (23, 0, '豆浆', 1, '1杯', '这是晨苑的', 85, 0);
INSERT INTO `sys_products` VALUES (24, 0, '豆浆', 1, '1杯', '这是小舟东的', 85, 0);
INSERT INTO `sys_products` VALUES (25, 0, '没说就是0卡', 1, '100克', '这是北秀的', 0, 0);
INSERT INTO `sys_products` VALUES (26, 0, '没说就是0卡', 1, '100克', '这是工程师的', 0, 0);
INSERT INTO `sys_products` VALUES (27, 0, '没说就是0卡', 1, '100克', '这是学苑的', 0, 0);
INSERT INTO `sys_products` VALUES (28, 0, '没说就是0卡', 1, '100克', '这是二食堂的', 0, 0);
INSERT INTO `sys_products` VALUES (29, 0, '没说就是0卡', 1, '100克', '这是晨苑的', 0, 0);
INSERT INTO `sys_products` VALUES (30, 0, '没说就是0卡', 1, '100克', '这是小舟东的', 0, 0);
INSERT INTO `sys_products` VALUES (31, 0, '走路（慢）', 2, '60分钟', '这是北校体育馆', -139, 0);
INSERT INTO `sys_products` VALUES (32, 0, '走路（慢）', 2, '60分钟', '这是北校操场', -139, 0);
INSERT INTO `sys_products` VALUES (33, 0, '走路（慢）', 2, '60分钟', '这是南校风雨操场', -139, 0);
INSERT INTO `sys_products` VALUES (34, 0, '走路（慢）', 2, '60分钟', '这是南校西体楼', -139, 0);
INSERT INTO `sys_products` VALUES (35, 0, '走路（慢）', 2, '60分钟', '这是南校操场', -139, 0);
INSERT INTO `sys_products` VALUES (36, 0, '走路（慢）', 2, '60分钟', '这是氧适堡（已跑路）', -139, 0);
INSERT INTO `sys_products` VALUES (37, 0, '快走(64kl/h)', 2, '60分钟', '这是北校体育馆', -429, 0);
INSERT INTO `sys_products` VALUES (38, 0, '快走(64kl/h)', 2, '60分钟', '这是北校操场', -429, 0);
INSERT INTO `sys_products` VALUES (39, 0, '快走(64kl/h)', 2, '60分钟', '这是南校风雨操场', -429, 0);
INSERT INTO `sys_products` VALUES (40, 0, '快走(64kl/h)', 2, '60分钟', '这是南校西体楼', -429, 0);
INSERT INTO `sys_products` VALUES (41, 0, '快走(64kl/h)', 2, '60分钟', '这是南校操场', -429, 0);
INSERT INTO `sys_products` VALUES (42, 0, '快走(64kl/h)', 2, '60分钟', '这是氧适堡（已跑路）', -429, 0);
INSERT INTO `sys_products` VALUES (43, 0, '躺着', 2, '60分钟', '这是北校体育馆', -114514, 0);
INSERT INTO `sys_products` VALUES (44, 0, '躺着', 2, '60分钟', '这是北校操场', -114514, 0);
INSERT INTO `sys_products` VALUES (45, 0, '躺着', 2, '60分钟', '这是南校风雨操场', -114514, 0);
INSERT INTO `sys_products` VALUES (46, 0, '躺着', 2, '60分钟', '这是南校西体楼', -114514, 0);
INSERT INTO `sys_products` VALUES (47, 0, '躺着', 2, '60分钟', '这是南校操场', -114514, 0);
INSERT INTO `sys_products` VALUES (48, 0, '躺着', 2, '60分钟', '这是氧适堡（已跑路）', -114514, 0);
INSERT INTO `sys_products` VALUES (49, 0, '树人开封菜', 3, '疯狂星期四', '味道一般', 1024, 0);
INSERT INTO `sys_products` VALUES (50, 0, '善贤麦当当', 3, '就是有点远', '分量太少', 2048, 0);
INSERT INTO `sys_products` VALUES (51, 0, '冬日睡大觉', 3, '早八太多辣', '被窝太冷', -512, 0);
INSERT INTO `sys_products` VALUES (52, 0, '添加新记录用', 0, '0', '0', 0, 0);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `nick_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `del_flag` tinyint(4) NULL DEFAULT 0 COMMENT '是否删除  -1：已删除  0：正常',
  PRIMARY KEY (`uid`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32205534 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户管理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'PsOgDw', NULL, 'string', '1', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (4, 'V8v50J', NULL, 'string', '4', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (5, 'oImc', NULL, 'string', '5', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (8, 'rL5ejs', NULL, 'string', '8', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (9, 'eI', NULL, 'string', '9', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (11, '57i', NULL, 'string', '11', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (5555555, 'pr7J', NULL, 'string', '55', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32101147, 'aW', NULL, 'string', '123456', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32101164, 'hwz', '丹华', NULL, '1', '6666@qq.com', '888899999', 0);
INSERT INTO `sys_user` VALUES (32105429, 'twokar', 'Two_kar', '', '1', 't_kar@q.com', '114514', 0);
INSERT INTO `sys_user` VALUES (32105531, 'zyp', 'Hana', NULL, '123456', '114514@qq.com', '114514114514', 0);
INSERT INTO `sys_user` VALUES (32105599, 'mXxUM', NULL, 'string', '123', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32105899, 'cD', NULL, 'string', '123', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32205531, 'EsSo8gHX', NULL, 'string', '123', 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32205532, 'Pdf3', NULL, 'string', NULL, 'string', 'string', NULL);
INSERT INTO `sys_user` VALUES (32205533, 'D1T', NULL, 'string', NULL, 'string', 'string', NULL);

SET FOREIGN_KEY_CHECKS = 1;
