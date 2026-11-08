# 练习 3：Launch + 静态 TF

**目标**：用单个 launch 启动 talker 并发布 `base_link → camera_link` 静态变换。

## 任务

1. 添加 `tf2_ros` 的 `static_transform_publisher` 节点到 launch。
2. RViz2 添加 TF 显示，确认 `camera_link` 出现在树中。
3. 将 talker 重映射到 `/robot/status`（String）。

## 验收

`ros2 run tf2_ros tf2_echo base_link camera_link` 输出与 launch 中 xyz/rpy 一致。
