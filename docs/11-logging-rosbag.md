# 第 11 章：日志、诊断与 rosbag2

## 11.1 日志

```cpp
RCLCPP_INFO(node->get_logger(), "speed=%.2f", v);
RCLCPP_WARN_THROTTLE(node->get_logger(), *clock, 5000, "...");
```

设置级别：

```bash
ros2 run rclcpp_components component_container --ros-args --log-level debug
```

## 11.2 rqt_console

过滤节点、级别，定位偶发错误。

## 11.3 rosbag2

录包与回放是复现 bug、离线算法验证的核心。

```bash
ros2 bag record /scan /tf /tf_static /odom
ros2 bag info my_bag
ros2 bag play my_bag --clock   # 发布 /clock，配合 use_sim_time
```

ROS1 的 `rosbag` → ROS2 的 `ros2 bag`；格式为 sqlite3 或 mcap（推荐 mcap）。

## 11.4 ros2 doctor

检查 QoS、版本、网络等环境一致性。

## 11.5 自查清单

- [ ] 录一段包含激光+TF 的 bag 并成功回放
- [ ] 回放时 RViz 能显示历史激光
- [ ] 知道 `THROTTLE` 避免日志洪泛

## 下一章

→ [第 12 章：ros2_control 简介](12-ros2-control.md)
