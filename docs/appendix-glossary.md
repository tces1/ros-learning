# 附录 B：术语表

| 术语 | 解释 |
|------|------|
| ament | ROS2 构建/导出的 CMake/Python 基础设施 |
| DDS | Data Distribution Service，ROS2 默认通信中间件标准 |
| RMW | ROS Middleware interface，连接 rcl 与具体 DDS |
| QoS | 服务质量策略（可靠性、历史深度等） |
| Frame | 坐标系名称，TF 中的节点标识 |
| URDF | 机器人连杆-关节描述格式 |
| Bringup | 一次性启动整机软件栈的 launch 集合 |
| Lifecycle | 节点状态机：unconfigured → inactive → active |
| Costmap | 占栅格代价地图，供导航规划避障 |
| AMCL | 自适应蒙特卡洛定位 |
| Behavior Tree | 行为树，Nav2 任务编排方式 |
| ros2_control | 控制器与硬件抽象框架 |
| MCAP | 现代 rosbag 存储格式之一 |
