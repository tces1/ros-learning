# ROS2 机器人测试教材

面向有开发经验、想从事**机器人测试 / 测试开发**的工程师。以 **ROS2 Jazzy（Ubuntu 24.04 + Gazebo Harmonic）为主线**，Humble 用户把命令里的发行版名替换即可。

- 第 1–16 章：ROS2 基础，每章末尾有「测试视角」，说明该章知识在测试工作中的用法与常见缺陷
- 测试篇 T1–T8：测试体系、单元与组件测试、launch_testing 集成测试、仿真场景测试、数据回放测试、性能与稳定性、实机与现场测试，以及为巡逻小车建立完整测试体系的综合项目

## 开始阅读

**完整教材是网页版**：双击打开 [`web/index.html`](web/index.html) 即可，无需联网、无需服务器。

网页版包含：

- 16 章 ROS2 基础 + 8 篇机器人测试：概念讲解、可直接复制的完整代码（Python + C++）、示意图、易错点提示
- 测试篇中的测试代码能发现前面章节代码中真实存在的缺陷（NaN 变满速、雷达中断仍放行、巡逻并发等）
- 每章自测题（点击展开答案）和可勾选的自查清单（勾选状态保存在浏览器）
- 6 套动手练习及参考答案
- 4 个附录：常见问题排查、ROS1 ↔ ROS2 对照、命令速查、术语表
- 侧边栏搜索、本页目录、学习进度、深色模式

`docs/` 与 `exercises/` 中的 Markdown 是早期的提纲版本，内容以网页版为准。

## 学习路线（建议 7 周）

| 周次 | 内容 | 目标 |
|------|------|------|
| 1 | 1–3 章 + T1 | 装好环境，理解 ROS2 与机器人测试全貌 |
| 2 | 4–6 章 + T2 | 通信机制；单元与组件测试 |
| 3 | 7–9 章 + T3 | TF、URDF、仿真；launch_testing 集成测试 |
| 4 | 10–12 章 + T5 | 工程化与录包；数据回放测试 |
| 5 | 13 章 + T4（14、15 章选读） | Nav2；仿真场景测试 |
| 6 | 16 章 + T6 | 巡逻小车；性能与稳定性测试 |
| 7 | T7 + T8 | 实机与现场测试；综合测试项目 |

## 目录结构

```
web/
  index.html            首页与学习路线
  chapters/             第 1–16 章（ROS2 基础 + 测试视角）
  testing/              测试篇 T1–T8
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
