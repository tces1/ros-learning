# 第 16 章：毕业项目 —— 差速小车全栈 demo

## 16.1 项目目标

在仿真环境中实现：

1. URDF + Gazebo 差速车 + 激光
2. `ros2_control` 或 Gazebo 插件接收 `cmd_vel`
3. SLAM 建图保存地图
4. Nav2 定点导航（至少 3 个航点）
5. （选做）键盘 teleop + rosbag 录一段演示

## 16.2 推荐仓库结构

```
capstone_ws/src/
  capstone_bringup/
  capstone_description/
  capstone_navigation/config/nav2_params.yaml
```

## 16.3 验收标准

| 项 | 标准 |
|----|------|
| TF | `map→odom→base_link→laser` 无断裂 |
| 定位 | 已知地图中 AMCL 粒子收敛 |
| 导航 | 单次导航成功率 > 80%（无随机障碍时） |
| 文档 | README 含安装、launch 命令、演示视频或 bag |

## 16.4 里程碑拆分

- **第 1 周**：描述 + 仿真能动
- **第 2 周**：SLAM + 地图
- **第 3 周**：Nav2 调参
- **第 4 周**：整合 launch + 文档

## 16.5 常见坑回顾

- `use_sim_time` 未全体一致
- 激光倒装 `upside_down` / `angle_min` 配置
- `footprint` 大于真实车体导致规划失败
- QoS 导致 costmap 收不到 `/scan`

## 16.6 延伸方向

- 机械臂抓取（MoveIt）
- 多机 Domain + namespace
- Web 遥控（rosbridge / foxglove）
- 真车：驱动串口/CAN 替换 Gazebo 插件

## 恭喜

完成本项目后，你已具备阅读开源机器人仓库（TurtleBot、Nav2 示例、厂商 SDK）的基础能力。持续实践请跟 **发行版 Changelog** 与 **REP** 文档保持同步。

## 附录

→ [ROS1 速查对照](appendix-ros1-cheatsheet.md)  
→ [术语表](appendix-glossary.md)
