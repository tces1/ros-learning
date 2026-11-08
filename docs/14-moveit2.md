# 第 14 章：MoveIt 2 与机械臂运动规划

## 14.1 MoveIt 解决什么问题

给定机械臂 URDF + 碰撞模型，完成：

- **运动学**：正/逆解（KDL、IKFast、TracIK）
- **规划**：关节空间或笛卡尔路径（OMPL、Pilz、STOMP）
- **执行**：通过 FollowJointTrajectory 发送给控制器
- **场景**：碰撞物体、attach object

## 14.2 核心配置

- `moveit_config` 包：由 Setup Assistant 生成 `joint_limits.yaml`、`kinematics.yaml`、`ompl_planning.yaml`
- **Planning Scene**：monitor 订阅点云/深度更新障碍

## 14.3 典型流程

1. RViz 中拖动 **MotionPlanning** 插件设置目标姿态
2. Plan → Execute
3. 或通过 `move_group` interface / Python `MoveGroup` API

## 14.4 与 Nav2 边界

- Nav2：**移动底盘** 在地图中导航
- MoveIt：**操作臂** 在笛卡尔/关节空间规划

移动操作（Mobile Manipulation）需统一 TF 与调度（常自定义行为树）。

## 14.5 自查清单

- [ ] 会用 Setup Assistant 生成 config 包
- [ ] 理解 planning scene 与真实点云的关系
- [ ] 知道控制器不匹配时 execute 失败如何查 log

## 下一章

→ [第 15 章：感知与点云基础](15-perception.md)
