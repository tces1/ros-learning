# ROS / ROS2 系统学习教材

面向零基础到能独立做小型机器人项目的学习者。以 **ROS2 Jazzy（Ubuntu 24.04 + Gazebo Harmonic）为主线**，Humble 用户把命令里的发行版名替换即可；关键章节对照 **ROS1（Noetic）**。

## 开始阅读

**完整教材是网页版**：双击打开 [`web/index.html`](web/index.html) 即可，无需联网、无需服务器。

网页版包含：

- 16 章正文：概念讲解、可直接复制的完整代码（Python + C++）、示意图、易错点提示
- 每章自测题（点击展开答案）和可勾选的自查清单（勾选状态保存在浏览器）
- 6 套动手练习及参考答案
- 4 个附录：常见问题排查、ROS1 ↔ ROS2 对照、命令速查、术语表
- 侧边栏搜索、本页目录、学习进度、深色模式

`docs/` 与 `exercises/` 中的 Markdown 是早期的提纲版本，内容以网页版为准。

## 学习路线（建议 6 周）

| 周次 | 章节 | 目标 |
|------|------|------|
| 1 | 1–3 | 理解 ROS2，安装环境，写出第一个节点 |
| 2 | 4–6 | 话题与 QoS、服务、参数、动作、Launch |
| 3 | 7–9 | TF2、URDF / Xacro、Gazebo 仿真 |
| 4 | 10–12 | colcon 工程化、调试与 rosbag2、ros2_control |
| 5 | 13–15 | Nav2 导航、MoveIt 2、感知 |
| 6 | 16 + 练习 | 毕业项目：自主巡逻小车 |

## 目录结构

```
web/
  index.html            首页与学习路线
  chapters/             第 1–16 章
  exercises.html        练习与参考答案
  appendix/             附录 A–D
  assets/               样式与脚本
docs/, exercises/       早期 Markdown 提纲
```

## 环境建议

- **推荐**：Ubuntu 24.04 + ROS2 Jazzy；Windows 用户使用 WSL2
- **也可以**：Ubuntu 22.04 + ROS2 Humble（仿真章节需改用 Gazebo Fortress）

## 官方资源

- [ROS2 Jazzy 文档](https://docs.ros.org/en/jazzy/)
- [Navigation2](https://docs.nav2.org/)
- [MoveIt 2](https://moveit.picknik.ai/)
- [ros2_control](https://control.ros.org/)
- [Gazebo](https://gazebosim.org/docs)

## 许可

教材文本 CC BY-SA 4.0；示例代码 MIT。
