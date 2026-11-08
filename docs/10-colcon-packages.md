# 第 10 章：colcon 与包开发规范

## 10.1 构建命令

```bash
colcon build                    # 全量
colcon build --packages-select pkg_a pkg_b
colcon build --symlink-install  # Python 开发友好
colcon test
```

并行与缓存：`--cmake-args -DCMAKE_BUILD_TYPE=Release`。

## 10.2 包类型

| 类型 | 说明 |
|------|------|
| ament_cmake | C++ 主，可混合消息生成 |
| ament_python | 纯 Python 节点 |

依赖在 `package.xml` 声明（`depend` / `build_depend` / `exec_depend`）；可用 `rosdep` 安装系统依赖：

```bash
rosdep install --from-paths src --ignore-src -r -y
```

## 10.3 代码结构建议

```
my_nav/
  package.xml
  CMakeLists.txt 或 setup.py
  include/my_nav/...
  src/...
  launch/
  config/
  urdf/
  worlds/
```

- **单一职责**：`my_robot_bringup` 只 launch，不写算法。
- **接口包**：自定义消息可独立 `my_robot_msgs` 包，减少循环依赖。

## 10.4 Lint 与测试

```bash
colcon test --packages-select my_pkg
```

ament 提供 `ament_cmake_cpplint`、`ament_flake8` 等；CI 中常跑 `colcon build && colcon test`。

## 10.5 自查清单

- [ ] 新包能被 `ros2 pkg list` 找到（已 source install）
- [ ] 会用 `rosdep` 解决依赖
- [ ] 理解 `--symlink-install` 适用场景

## 下一章

→ [第 11 章：日志、诊断与 rosbag2](11-logging-rosbag.md)
