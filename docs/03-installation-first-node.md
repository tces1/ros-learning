# 第 3 章：安装与第一个节点

## 3.1 安装 ROS2（Humble on Ubuntu 22.04 为例）

```bash
# 设置 locale、源、密钥（以官方文档为准，以下为典型流程摘要）
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

sudo apt update
sudo apt install ros-humble-desktop ros-dev-tools
```

每次开终端加载环境：

```bash
source /opt/ros/humble/setup.bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

**Windows（WSL2）**：在 WSL 的 Ubuntu 内按上式安装；图形工具需 WSLg 或 X 服务器。

## 3.2 创建工作空间

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
source install/setup.bash
```

## 3.3 运行官方示例

终端 A：

```bash
ros2 run demo_nodes_cpp talker
```

终端 B：

```bash
ros2 run demo_nodes_cpp listener
```

观察 `ros2 topic echo /chatter` 与 `ros2 topic hz /chatter`。

## 3.4 自己写最小 Python 发布者

在 `~/ros2_ws/src` 中：

```bash
ros2 pkg create --build-type ament_python my_first_nodes --dependencies rclpy std_msgs
```

编辑 `my_first_nodes/my_first_nodes/talker.py`：

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String


class Talker(Node):
    def __init__(self):
        super().__init__('talker')
        self.pub = self.create_publisher(String, 'chatter', 10)
        self.timer = self.create_timer(1.0, self.timer_cb)

    def timer_cb(self):
        msg = String()
        msg.data = 'Hello ROS2'
        self.pub.publish(msg)
        self.get_logger().info(f'Publishing: {msg.data}')


def main():
    rclpy.init()
    node = Talker()
    try:
        rclpy.spin(node)
    finally:
        node.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    main()
```

在 `setup.py` 的 `entry_points` 中注册 `talker = my_first_nodes.talker:main`，然后：

```bash
cd ~/ros2_ws
colcon build --packages-select my_first_nodes
source install/setup.bash
ros2 run my_first_nodes talker
```

## 3.5 常用 CLI 速查

| 命令 | 作用 |
|------|------|
| `ros2 node list` | 列出节点 |
| `ros2 topic list` | 列出话题 |
| `ros2 topic info /foo` | 话题类型与 pub/sub |
| `ros2 interface show std_msgs/msg/String` | 查看消息字段 |
| `ros2 param list` | 节点参数 |

ROS1 对照：`rosrun` → `ros2 run`，`rostopic` → `ros2 topic`，`rosnode` → `ros2 node`。

## 3.6 自查清单

- [ ] 能成功 `colcon build` 并 source `install/setup.bash`
- [ ] 运行自写 talker 并在 echo 中看到数据
- [ ] 会用 `ros2 topic info` 查类型与 QoS（下一章细讲）

## 下一章

→ [第 4 章：话题与 QoS](04-topics-qos.md)
