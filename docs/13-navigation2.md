# 第 13 章：Navigation2（Nav2）概念

## 13.1 导航栈组成

Nav2 是 ROS2 的标准二维/部分三维导航框架，核心服务器包括：

- **Map Server**：加载静态栅格地图
- **AMCL** 或其它定位：发布 `map → odom`
- **Planner Server**：全局路径（NavFn、Smac 等）
- **Controller Server**：局部跟踪（DWB、RPP、MPPI 等）
- **Behavior Tree Navigator**：编排「规划 → 跟随 → 恢复」
- **Smoother / Costmap filters**：路径平滑与禁区

## 13.2 代价地图（Costmap 2D）

- **global_costmap**：静态层 + 膨胀层，用于全局规划
- **local_costmap**：滚动窗口 + 实时障碍层

参数 `inflation_radius`、`robot_radius` 决定贴墙距离。

## 13.3 行为树（BT）

相比 ROS1 `move_base` 的有限状态机，Nav2 用 XML 行为树灵活组合：

- `ComputePathToPose` → `FollowPath` → 失败则 `ClearCostmap` / `Spin` / `BackUp`

## 13.4 典型话题与 Action

- Action：`navigate_to_pose`（`nav2_msgs/action/NavigateToPose`）
- 订阅：`/scan`、`/odom`、TF
- 发布：`/cmd_vel`

```bash
ros2 action send_goal /navigate_to_pose nav2_msgs/action/NavigateToPose "
{
  pose: {
    header: {frame_id: 'map'},
    pose: {position: {x: 2.0, y: 0.5, z: 0.0}, orientation: {w: 1.0}}
  }
}"
```

## 13.5 实操路径

1. 用 SLAM Toolbox 或 Cartographer 建图保存 `.yaml` + `.pgm`
2. 配置 `nav2_params.yaml`（速度、footprint、控制器）
3. `nav2_bringup` + RViz「2D Goal Pose」

## 13.6 ROS1 对照

`move_base` + `amcl` + `costmap_2d` → Nav2 拆分多 lifecycle 节点，接口为 action。

## 13.7 自查清单

- [ ] 解释 global vs local costmap
- [ ] 在仿真中完成一次 navigate_to_pose
- [ ] 会调整 inflation 解决「窄道过不去」

## 下一章

→ [第 14 章：MoveIt 2 简介](14-moveit2.md)
