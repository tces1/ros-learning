# 第 6 章：Launch 与系统编排

## 6.1 为什么需要 Launch

真实系统往往同时启动：驱动、滤波、定位、导航、可视化。Launch 用 **声明式 Python/XML** 描述：

- 启动哪些节点、可执行文件参数
- 设置 namespace、remap
- 条件开关、参数文件、包含其他 launch

## 6.2 Python Launch 示例

`launch/bringup.launch.py`：

```python
from launch import LaunchDescription
from launch_ros.actions import Node


def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_first_nodes',
            executable='talker',
            name='talker',
            output='screen',
            parameters=[{'use_sim_time': False}],
            remappings=[('chatter', '/robot/chatter')],
        ),
    ])
```

```bash
ros2 launch my_first_nodes bringup.launch.py
```

## 6.3 常用模式

- `IncludeLaunchDescription`：分层 bringup（仿真 vs 实车）。
- `GroupAction` + `PushRosNamespace`：多机器人。
- `EventHandler`：某节点退出时关闭全网。

## 6.4 ROS1 对照

- `roslaunch pkg file.launch` → `ros2 launch pkg file.launch.py`
- ROS1 XML launch 仍可读，但 ROS2 官方推荐 Python launch 以便逻辑复用。

## 6.5 自查清单

- [ ] 用 launch 同时启动 talker + listener
- [ ] 会用 remapping 统一话题命名空间
- [ ] bringup 分「仿真 / 实车」两个顶层 launch

## 下一章

→ [第 7 章：TF2 与坐标系](07-tf2.md)
