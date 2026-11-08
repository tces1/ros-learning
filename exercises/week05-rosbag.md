# 练习 5：rosbag2

**目标**：录包与离线回放。

## 任务

1. 运行官方 `demo_nodes` talker+listener 5 分钟，或使用自己的节点。
2. `ros2 bag record -o lab5_bag /chatter`。
3. 停止节点后 `ros2 bag play lab5_bag --rate 0.5` 观察慢速回放。

## 验收

`ros2 bag info` 显示消息数量与时长合理。
