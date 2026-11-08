# 第 4 章：话题（Topic）与 QoS

## 4.1 消息与接口

- 标准类型：`std_msgs`、`geometry_msgs`、`sensor_msgs` 等。
- 自定义：`my_pkg/msg/MyMsg.msg`，在 `CMakeLists.txt` 与 `package.xml` 中声明 `rosidl` 生成。

查看定义：

```bash
ros2 interface show sensor_msgs/msg/LaserScan
```

## 4.2 发布者与订阅者（C++ 思路）

```cpp
auto pub = node->create_publisher<std_msgs::msg::String>("chatter", 10);
auto sub = node->create_subscription<std_msgs::msg::String>(
    "chatter", 10,
    [](const std_msgs::msg::String::SharedPtr msg) {
      RCLCPP_INFO(node->get_logger(), "Got: %s", msg->data.c_str());
    });
```

队列深度 `10` 是历史缓存条目数；与 QoS 策略共同决定行为。

## 4.3 QoS（Quality of Service）

ROS2 基于 DDS QoS。常见组合：

| 场景 | reliability | durability | history |
|------|-------------|------------|---------|
| 传感器流（可丢帧） | best_effort | volatile | keep_last |
| 控制指令 / 地图 | reliable | volatile | keep_last |
| 低频配置 / latched 地图 | reliable | transient_local | keep_last |

**坑**：发布者与订阅者 QoS 不兼容时，两者 **不会连接**（`ros2 topic info` 可能只显示一侧）。Gazebo 图像、高速激光常用 `sensor_data_qos` 预设。

```python
from rclpy.qos import qos_profile_sensor_data
sub = node.create_subscription(Image, 'image', cb, qos_profile_sensor_data)
```

## 4.4 异步与 Executor

- `rclpy.spin(node)` 单线程处理回调。
- 多节点可用 `MultiThreadedExecutor`；注意回调里不要阻塞过久。

## 4.5 rostopic 调试技巧

```bash
ros2 topic pub /cmd_vel geometry_msgs/msg/Twist "{linear: {x: 0.2}}"
ros2 topic bw /camera/image_raw
ros2 doctor --report
```

## 4.6 ROS1 对照

- `queue_size` 大致对应 `keep_last(depth)`。
- ROS1 `latch` 大致对应 `transient_local` + `reliable`。

## 4.7 自查清单

- [ ] 能解释 reliable 与 best_effort 的取舍
- [ ] 遇到过 QoS 不匹配并能用 `ros2 topic info -v` 排查
- [ ] 写过自定义 msg 并成功发布

## 下一章

→ [第 5 章：服务、参数与动作](05-services-params-actions.md)
