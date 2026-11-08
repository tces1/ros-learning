# 练习 1：第一个工作空间与节点

**目标**：独立创建 `ros2_ws`，完成 Python talker，并用 CLI 观察。

## 任务

1. 安装或确认 ROS2 desktop 环境已 source。
2. 创建包 `student_nodes`，添加订阅者 `listener`，打印收到的字符串。
3. 同时运行 talker + listener，截图 `ros2 node info` 显示两者 pub/sub 关系。

## 验收

- `colcon build` 无错误
- `listener` 日志每秒打印一次 `Hello ROS2`

## 提示

`create_subscription` 的 QoS depth 与 talker 一致即可。
