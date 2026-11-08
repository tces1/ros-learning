# 第 9 章：Gazebo / 仿真入门

## 9.1 仿真在 ROS2 中的角色

仿真提供：

- 虚拟传感器（激光、深度相机、IMU）
- 物理引擎（接触、摩擦）
- 与 `ros2_control` 对接的关节接口

ROS2 Humble 常见组合：**Gazebo Classic（gazebo11）** 或 **Gazebo（Ignition/Gazebo Harmonic）**，具体以发行版文档为准。教材概念互通：差异主要在 launch 与 bridge 包名。

## 9.2 典型数据流

```
Gazebo 激光插件 → /scan
Gazebo 差速驱动 → /odom + odom→base_link TF
你的算法 → /cmd_vel → 插件
```

**务必**：`use_sim_time:=true`，并确保 `/clock` 发布。

## 9.3 ros_gz_bridge（新一代 Gazebo）

在 Gazebo 与 ROS2 之间桥接话题，按类型成对配置。导入 turtlebot 或官方 demo 工作空间可看到完整示例。

## 9.4 调试清单

- 仿真空白：模型未 spawn 或 plugin 未加载
- 机器人不动：QoS 不匹配、`cmd_vel` frame 错误
- TF 乱：`robot_state_publisher` 与 Gazebo 都在发冲突 TF——只保留一侧

## 9.5 自查清单

- [ ] 在仿真中 `ros2 topic hz /scan` 有稳定频率
- [ ] RViz 中 Fixed Frame + TF 正确
- [ ] 会用 teleop 发 `cmd_vel` 驱动小车

## 下一章

→ [第 10 章：colcon 与包开发规范](10-colcon-packages.md)
