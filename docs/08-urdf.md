# 第 8 章：URDF / Xacro 机器人描述

## 8.1 URDF 是什么

**Unified Robot Description Format**：用 XML 描述连杆（link）、关节（joint）、惯性、碰撞与视觉网格。

用途：

- RViz / Gazebo 显示外观
- `robot_state_publisher` 根据 **joint_states** 发布 TF
- MoveIt 碰撞模型

## 8.2 最小片段

```xml
<robot name="diff_bot">
  <link name="base_link">
    <visual>
      <geometry><box size="0.4 0.3 0.1"/></geometry>
    </visual>
  </link>
  <joint name="laser_joint" type="fixed">
    <parent link="base_link"/>
    <child link="laser_link"/>
    <origin xyz="0.15 0 0.1" rpy="0 0 0"/>
  </joint>
  <link name="laser_link"/>
</robot>
```

## 8.3 Xacro

用宏、属性减少重复：`robot.xacro` → 生成 `robot.urdf`。

```bash
xacro robot.xacro > robot.urdf
```

ROS2 中常用 `robot_state_publisher` + `joint_state_publisher`（或 Gazebo 插件发布 joint state）。

## 8.4 joint_states

`sensor_msgs/msg/JointState` 列出各关节位置；差速车常为 **虚拟关节** 或仅用 `base_link` 固定传感器。

## 8.5 自查清单

- [ ] 能用 RViz2 加载 `robot_description` 参数
- [ ] 知道 visual 与 collision 分离的意义
- [ ] 会用 xacro 参数化轮距、传感器高度

## 下一章

→ [第 9 章：仿真入门](09-simulation.md)
