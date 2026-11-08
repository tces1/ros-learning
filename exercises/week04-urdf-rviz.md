# 练习 4：URDF 与 RViz

**目标**：加载自绘差速车 URDF（简化 box + 激光杆）。

## 任务

1. 在 `description` 包中写 `robot.xacro`。
2. launch `robot_state_publisher` + `joint_state_publisher`（关节可设为 0）。
3. RViz Fixed Frame = `base_link`，显示 RobotModel。

## 加分

用 xacro 属性 `$(arg wheelbase)` 改轮距，生成不同 URDF。
