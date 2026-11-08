# 第 5 章：服务、参数与动作

## 5.1 服务（Service）

**适用**：短时、一对一、需应答（查询地图元数据、使能电机）。

```bash
ros2 service list
ros2 service type /spawn
ros2 service call /clear std_srvs/srv/Empty
```

服务端在节点内 `create_service`；客户端 `create_client`，`async_send_request` 或同步 `call`。

**设计原则**：服务 handler 应快速返回；长时间任务用 **Action**。

## 5.2 参数（Parameter）

ROS2 参数支持声明时类型、动态修改、描述（用于文档与 GUI）。

```python
self.declare_parameter('max_speed', 0.5)
speed = self.get_parameter('max_speed').get_parameter_value().double_value
```

```bash
ros2 param set /my_node max_speed 1.0
ros2 param dump /my_node > params.yaml
```

Launch 中可通过 `parameters=[params.yaml]` 或内联字典加载。

## 5.3 动作（Action）

**适用**：导航到某点、机械臂轨迹——有目标、有进度反馈、可取消。

接口文件 `Fibonacci.action`：

```
int32 order
---
int32[] sequence
---
int32 sequence
```

```bash
ros2 action list
ros2 action send_goal /fibonacci example_interfaces/action/Fibonacci "{order: 10}"
```

C++/Python 使用 `rclcpp_action` / `rclpy.action`。

## 5.4 三种接口如何选择

| 类型 | 语义 | 典型例子 |
|------|------|----------|
| Topic | 连续流 | `/scan`, `/odom` |
| Service | 单次 RPC | 逆运动学单点解算 |
| Action | 长时任务 + 反馈 | `NavigateToPose`, `FollowJointTrajectory` |

## 5.5 自查清单

- [ ] 实现过一个自定义 srv 并在 CLI 中 call 成功
- [ ] 用参数文件切换两种运行模式
- [ ] 理解 Action 与 Service 的边界

## 下一章

→ [第 6 章：Launch 与组合启动](06-launch-files.md)
