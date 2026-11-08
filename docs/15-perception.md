# 第 15 章：感知 pipeline 基础

## 15.1 常见消息

| 消息 | 内容 |
|------|------|
| `sensor_msgs/msg/Image` | 原始或压缩图像 |
| `sensor_msgs/msg/LaserScan` | 2D 激光 |
| `sensor_msgs/msg/PointCloud2` | 3D 点云 |

**image_pipeline**：去畸变、深度对齐 RGB。

## 15.2 pcl_ros / 点云

```bash
ros2 topic echo /points --once
```

在节点中用 `sensor_msgs_py` 或 PCL 转换，做地面分割、聚类、跟踪。

## 15.3 同步与时序

多传感器融合常用 **message_filters** 时间同步 ApproximateTime：

```python
import message_filters
sub1 = message_filters.Subscriber(node, Image, 'left')
sub2 = message_filters.Subscriber(node, Image, 'right')
sync = message_filters.ApproximateTimeSynchronizer([sub1, sub2], 10, 0.1)
sync.registerCallback(callback)
```

## 15.4 与导航衔接

- 代价地图 **VoxelLayer / ObstacleLayer** 订阅点云或激光
- 注意观测所参考的 frame 必须能变换到 `global_costmap` 的 frame

## 15.5 自查清单

- [ ] 能把点云在 RViz 中可视化
- [ ] 解释 LaserScan 与 PointCloud2 适用场景
- [ ] 知道深度相机与 `camera_optical_frame` 光学系约定

## 下一章

→ [第 16 章：毕业项目](16-capstone-project.md)
