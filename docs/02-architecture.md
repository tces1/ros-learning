# 第 2 章：ROS2 系统架构

## 2.1 软件堆栈分层

```
┌─────────────────────────────────────┐
│  应用：导航、机械臂、视觉、你的节点   │
├─────────────────────────────────────┤
│  ROS2 客户端库：rclcpp / rclpy      │
├─────────────────────────────────────┤
│  rcl：上下文、图、时钟、日志         │
├─────────────────────────────────────┤
│  rmw：ROS MiddleWare 抽象           │
├─────────────────────────────────────┤
│  DDS 实现：Fast-DDS, Cyclone 等     │
└─────────────────────────────────────┘
```

你写代码时主要接触 **rclcpp**（C++）或 **rclpy**（Python）。更换 DDS 实现时，多数应用代码无需改动（通过 `RMW_IMPLEMENTATION` 切换）。

## 2.2 计算图（Computation Graph）

- **节点（Node）**：进程内的 ROS 实体，有唯一名称（同域内应唯一）。
- **发布者 / 订阅者（Publisher / Subscriber）**：绑定到某个 **话题**，传输 **消息（Message）** 流。
- **服务器 / 客户端（Service Server / Client）**：一次请求、一次响应。
- **动作服务器 / 客户端（Action Server / Client）**：目标 + 周期性反馈 + 可取消。

用 `rqt_graph` 或 `ros2 node list` / `ros2 topic list` 可查看运行时图。

## 2.3 域（Domain）与发现

ROS2 使用 DDS **Domain ID**（环境变量 `ROS_DOMAIN_ID`，默认 0）隔离不同仿真或实验室组。同一 Domain 内的节点自动发现彼此（组播/单播，取决于网络配置）。

**实践提示**：同一局域网下两人同时默认 Domain 0 可能「看到」对方的 topic；做实验时可为每人设不同 ID。

## 2.4 包（Package）与工作空间（Workspace）

典型布局：

```
ros2_ws/
  src/
    my_robot_bringup/
    my_robot_description/
  build/          # 构建中间文件（可删）
  install/        # 安装前缀（source 它）
  log/
```

- **ament + colcon**：ROS2 的构建系统（类比 ROS1 的 catkin）。
- 每个包有 `package.xml` 与 `CMakeLists.txt`（C++）或纯 Python 的 `setup.py`/`setup.cfg`。

## 2.5 时钟：系统时间与仿真时间

- `/clock` 话题在仿真中由 Gazebo 等发布；节点设置 `use_sim_time` 参数后按仿真时间推进。
- 导航、TF 插值都依赖一致的时间源。

## 2.6 ROS1 对照（ROS Master）

ROS1 依赖 **roscore**（`ROS_MASTER_URI`）。所有注册都经过 Master → **单点故障**、跨子网配置麻烦。ROS2 无 Master，但对网络与防火墙要求更明确。

## 2.7 自查清单

- [ ] 画出自己项目中的节点与话题草图
- [ ] 说明 `src` / `install` 目录各自用途
- [ ] 解释 `ROS_DOMAIN_ID` 的作用

## 下一章

→ [第 3 章：安装与第一个节点](03-installation-first-node.md)
