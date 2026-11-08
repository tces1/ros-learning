# 附录 A：ROS1 ↔ ROS2 速查对照

## 环境与命令

| ROS1 | ROS2 |
|------|------|
| `source /opt/ros/noetic/setup.bash` | `source /opt/ros/humble/setup.bash` |
| `roscore` | 不需要 |
| `rosrun pkg node` | `ros2 run pkg exec` |
| `roslaunch pkg f.launch` | `ros2 launch pkg f.launch.py` |
| `rosnode list` | `ros2 node list` |
| `rostopic list/echo/hz` | `ros2 topic ...` |
| `rosservice list/call` | `ros2 service ...` |
| `rosparam get/set` | `ros2 param ...` |
| `rosmsg show` | `ros2 interface show` |
| `catkin_make` / `catkin build` | `colcon build` |
| `rosbag record/play` | `ros2 bag record/play` |

## 代码 API

| ROS1 | ROS2 |
|------|------|
| `rospy.init_node` | `rclpy.init` + `Node` 类 |
| `rospy.Publisher` | `create_publisher` |
| `rospy.Subscriber` | `create_subscription` |
| `rospy.Service` | `create_service` |
| `actionlib` | `rclpy.action` / `rclcpp_action` |

## 迁移关注点

- 所有节点必须 spin；无全局 Master 初始化顺序更简单但 QoS 更重要
- `tf` → `tf2_ros`
- 参数不再全局匿名；在节点命名空间下管理
- Launch 建议重写为 Python，而非机械转换 XML

## 官方迁移指南

https://docs.ros.org/en/humble/Guides/Migration-From-ROS1.html
