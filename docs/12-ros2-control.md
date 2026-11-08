# 第 12 章：ros2_control 简介

## 12.1 动机

把 **硬件接口** 与 **控制器** 分离：

- `hardware_interface`：读关节状态、写命令（真实 CAN 或 Gazebo 插件）
- `controller_manager`：加载 `diff_drive_controller`、`joint_trajectory_controller` 等

## 12.2 概念

- **JointStateInterface** / **VelocityInterface** 等
- 控制器以插件形式动态加载
- 与 URDF 中的 `<ros2_control>` 标签对应

## 12.3 差速小车

`diff_drive_controller` 订阅 `/cmd_vel`，发布 `/odom` 与 joint 命令；配合 `joint_state_broadcaster`。

实车常遇：编码器单位、轮径标定、加速度限制在 yaml 中配置。

## 12.4 与 MoveIt 关系

机械臂栈：轨迹经 `FollowJointTrajectory` action → `joint_trajectory_controller` → 硬件。

## 12.5 自查清单

- [ ] 能在 launch 中列出 `controller_manager` 加载的控制器
- [ ] 理解 cmd_vel 到轮速的链路
- [ ] 知道 Gazebo 侧需匹配 `ros2_control` 插件

## 下一章

→ [第 13 章：Navigation2 概念](13-navigation2.md)
