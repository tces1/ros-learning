# 练习 2：QoS 实验

**目标**：亲眼看到 QoS 不匹配导致「无数据」。

## 任务

1. 写节点 A：`reliable` 发布 `std_msgs/msg/Int32` 到 `/qos_test`。
2. 写节点 B：分别用 `best_effort` 与 `reliable` 订阅，各运行 30 秒记录是否收到消息。
3. 用 `ros2 topic info /qos_test -v` 对比连接状态。

## 思考题

高速相机图像你选哪种 reliability？为什么？
