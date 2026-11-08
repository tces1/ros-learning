(function () {
  'use strict';

  var PAGES = [
    { id: 'home', file: 'index.html', title: '首页 · 学习路线', group: '开始', kw: '首页 路线 进度 环境' },
    { id: 'ch01', file: 'chapters/01-introduction.html', title: '1. 为什么学 ROS / ROS2', group: '第一部分 · 入门基础', desc: 'ROS 是什么、发行版选择、ROS1 与 ROS2 的区别', kw: '历史 发行版 humble jazzy kilted rolling ros1 ros2 区别 dds 生态' },
    { id: 'ch02', file: 'chapters/02-architecture.html', title: '2. ROS2 系统架构', group: '第一部分 · 入门基础', desc: '分层架构、计算图、DDS 发现、生命周期节点与组件', kw: '节点 计算图 rcl rmw dds domain 发现 生命周期 lifecycle 组件 composition 命名空间' },
    { id: 'ch03', file: 'chapters/03-installation-first-node.html', title: '3. 安装与第一个节点', group: '第一部分 · 入门基础', desc: 'WSL2/Ubuntu 安装、工作空间、Python 与 C++ 节点', kw: 'wsl 安装 apt colcon 工作空间 talker listener python c++ rclpy rclcpp turtlesim' },
    { id: 'ch04', file: 'chapters/04-topics-qos.html', title: '4. 话题与 QoS', group: '第二部分 · 通信机制', desc: '发布订阅、自定义消息、QoS 兼容性、执行器与回调组', kw: 'topic publisher subscriber msg 自定义消息 qos reliable best_effort transient_local executor callback group' },
    { id: 'ch05', file: 'chapters/05-services-params-actions.html', title: '5. 服务、参数与动作', group: '第二部分 · 通信机制', desc: 'Service 请求响应、参数 YAML 与回调、Action 长任务', kw: 'service srv client parameter 参数 yaml action 反馈 取消 fibonacci' },
    { id: 'ch06', file: 'chapters/06-launch-files.html', title: '6. Launch 系统编排', group: '第二部分 · 通信机制', desc: 'Python/XML/YAML launch、参数、命名空间、事件', kw: 'launch 启动 参数 namespace remap include 条件 事件 timer' },
    { id: 'ch07', file: 'chapters/07-tf2.html', title: '7. TF2 坐标变换', group: '第三部分 · 建模与仿真', desc: '坐标系约定、广播与监听、四元数、常见错误', kw: 'tf tf2 frame map odom base_link 四元数 欧拉角 static broadcaster listener rep-105 rep-103' },
    { id: 'ch08', file: 'chapters/08-urdf.html', title: '8. URDF / Xacro 机器人描述', group: '第三部分 · 建模与仿真', desc: '连杆关节、惯性、Xacro 宏、在 RViz 中显示', kw: 'urdf xacro link joint inertial 惯性 robot_state_publisher joint_state_publisher rviz' },
    { id: 'ch09', file: 'chapters/09-simulation.html', title: '9. Gazebo 仿真入门', group: '第三部分 · 建模与仿真', desc: 'Gazebo Harmonic、ros_gz_bridge、差速驱动与激光', kw: 'gazebo harmonic ros_gz bridge 仿真 spawn 激光 lidar diff drive use_sim_time clock' },
    { id: 'ch10', file: 'chapters/10-colcon-packages.html', title: '10. colcon 与包开发规范', group: '第四部分 · 工程实践', desc: '构建选项、overlay、rosdep、测试与代码规范', kw: 'colcon build rosdep overlay underlay 测试 pytest gtest lint package.xml cmake' },
    { id: 'ch11', file: 'chapters/11-logging-rosbag.html', title: '11. 日志、调试与 rosbag2', group: '第四部分 · 工程实践', desc: '日志系统、rqt 工具、GDB 调试、录包回放与诊断', kw: 'log 日志 rqt rosbag mcap 调试 gdb diagnostics foxglove' },
    { id: 'ch12', file: 'chapters/12-ros2-control.html', title: '12. ros2_control', group: '第四部分 · 工程实践', desc: '硬件抽象、控制器管理器、差速控制器、自定义硬件', kw: 'ros2_control controller_manager diff_drive_controller hardware interface 控制器 spawner' },
    { id: 'ch13', file: 'chapters/13-navigation2.html', title: '13. Navigation2 导航', group: '第五部分 · 高级应用', desc: 'SLAM 建图、AMCL 定位、代价地图、行为树、Python 编程导航', kw: 'nav2 slam slam_toolbox amcl costmap 代价地图 行为树 planner controller simple commander 航点' },
    { id: 'ch14', file: 'chapters/14-moveit2.html', title: '14. MoveIt 2 机械臂', group: '第五部分 · 高级应用', desc: '运动学、规划、场景碰撞、MoveGroupInterface 编程', kw: 'moveit 机械臂 运动规划 ik 逆解 planning scene move_group ompl 笛卡尔 servo' },
    { id: 'ch15', file: 'chapters/15-perception.html', title: '15. 感知 Pipeline', group: '第五部分 · 高级应用', desc: '相机与 OpenCV、标定、点云处理、多传感器同步', kw: 'camera 相机 图像 cv_bridge opencv 点云 pointcloud2 标定 message_filters 深度' },
    { id: 'ch16', file: 'chapters/16-capstone-project.html', title: '16. 毕业项目：差速小车全栈', group: '第六部分 · 综合实战', desc: '从 URDF 到 SLAM 到多航点导航的完整项目', kw: 'capstone 毕业 项目 slam nav2 航点 综合' },
    { id: 'ex', file: 'exercises.html', title: '动手练习（含参考答案）', group: '练习与附录', kw: '练习 作业 答案 实验' },
    { id: 'faq', file: 'appendix/troubleshooting.html', title: '附录 A：常见问题排查', group: '练习与附录', kw: '报错 排查 faq 问题 错误 not found' },
    { id: 'ros1', file: 'appendix/ros1-cheatsheet.html', title: '附录 B：ROS1 ↔ ROS2 对照', group: '练习与附录', kw: 'ros1 迁移 catkin rospy roscpp noetic' },
    { id: 'cli', file: 'appendix/cli-cheatsheet.html', title: '附录 C：命令速查', group: '练习与附录', kw: 'ros2 cli 命令 速查' },
    { id: 'glossary', file: 'appendix/glossary.html', title: '附录 D：术语表', group: '练习与附录', kw: '术语 名词 解释' }
  ];

  var STORE = 'ros-learn:';
  var root = document.body.getAttribute('data-root') || '';
  var pageId = document.body.getAttribute('data-page');

  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(STORE + key);
      if (val === null) localStorage.removeItem(STORE + key);
      else localStorage.setItem(STORE + key, val);
    } catch (e) { return null; }
  }
  function isRead(id) { return store('read:' + id) === '1'; }
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- theme ---------- */
  var theme = store('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  /* ---------- syntax highlight ---------- */
  var KW = {
    python: 'and as assert async await break class continue def del elif else except False finally for from global if import in is lambda None nonlocal not or pass raise return self super True try while with yield',
    cpp: 'auto bool break case catch class const constexpr continue default delete do double else enum explicit false float for if int int32_t int64_t long namespace new nullptr override private protected public return size_t static struct switch template this throw true try typename uint8_t uint32_t using virtual void while',
    bash: 'sudo apt cd source export echo mkdir if then fi for do done in ros2 colcon rosdep git wget curl rm cp ls',
    cmake: 'cmake_minimum_required project find_package add_executable add_library ament_target_dependencies target_link_libraries target_include_directories install ament_package rosidl_generate_interfaces if endif set ament_add_gtest ament_lint_auto_find_test_dependencies',
    ros: 'bool byte char float32 float64 int8 uint8 int16 uint16 int32 uint32 int64 uint64 string wstring time duration'
  };
  var LINE_COMMENT = { python: '#', bash: '#', yaml: '#', cmake: '#', ros: '#', cpp: '//' };

  function buildRegex(lang) {
    var parts = [];
    var cls = [];
    function add(re, c) { parts.push('(' + re + ')'); cls.push(c); }
    if (lang === 'xml') {
      add('<!--[\\s\\S]*?-->', 'com');
      add('"[^"]*"', 'str');
      add('</?[\\w:.-]+', 'tag');
      add('/?>', 'tag');
      add('[\\w:.-]+(?==)', 'attr');
      add('\\$\\([^)]*\\)', 'var');
    } else {
      if (lang === 'python') add('"""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'', 'str');
      if (lang === 'cpp') add('/\\*[\\s\\S]*?\\*/', 'com');
      if (lang === 'bash') add('(?:^|(?<=\\s))#.*$', 'com');
      else if (LINE_COMMENT[lang]) add(LINE_COMMENT[lang].replace(/\//g, '\\/') + '.*$', 'com');
      add('"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\'', 'str');
      if (lang === 'cpp') add('^\\s*#\\s*\\w+', 'kw');
      if (lang === 'python') add('@[\\w.]+', 'attr');
      if (lang === 'yaml') add('(?<=^\\s*(?:-\\s+)?)[\\w./~-]+(?=\\s*:)', 'tag');
      if (lang === 'bash') {
        add('\\$\\{?\\w+\\}?|\\$\\(', 'var');
        add('(?<=\\s)--?[A-Za-z][\\w-]*', 'attr');
      }
      if (lang === 'cmake') add('\\$\\{[^}]*\\}', 'var');
      if (lang === 'ros') add('^---$', 'kw');
      if (KW[lang]) add('\\b(?:' + KW[lang].split(' ').join('|') + ')\\b', 'kw');
      add('\\b\\d+(?:\\.\\d+)?\\b', 'num');
    }
    return { re: new RegExp(parts.join('|'), 'gm'), cls: cls };
  }

  function highlight(code, lang) {
    if (!lang || lang === 'text') return esc(code);
    var r;
    try { r = buildRegex(lang); } catch (e) { return esc(code); }
    var out = '';
    var last = 0;
    var m;
    while ((m = r.re.exec(code)) !== null) {
      if (m[0] === '') { r.re.lastIndex++; continue; }
      out += esc(code.slice(last, m.index));
      var c = 'num';
      for (var i = 1; i < m.length; i++) { if (m[i] !== undefined) { c = r.cls[i - 1]; break; } }
      out += '<span class="hl-' + c + '">' + esc(m[0]) + '</span>';
      last = r.re.lastIndex;
    }
    return out + esc(code.slice(last));
  }

  function dedent(text) {
    var lines = text.replace(/\t/g, '    ').split('\n');
    while (lines.length && !lines[0].trim()) lines.shift();
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    var min = Infinity;
    lines.forEach(function (l) {
      if (l.trim()) min = Math.min(min, l.match(/^ */)[0].length);
    });
    if (min === Infinity) min = 0;
    return lines.map(function (l) { return l.slice(min); }).join('\n');
  }

  var LANG_LABEL = { bash: 'bash', python: 'Python', cpp: 'C++', xml: 'XML', yaml: 'YAML', cmake: 'CMake', ros: 'ROS 接口', text: '文本' };

  function renderCode() {
    var blocks = document.querySelectorAll('script[type="text/plain"].code');
    Array.prototype.forEach.call(blocks, function (s) {
      var lang = s.getAttribute('data-lang') || 'text';
      var file = s.getAttribute('data-file');
      var code = dedent(s.textContent);
      var wrap = el('div', { 'class': 'code-block' });
      var head = el('div', { 'class': 'code-head' });
      head.appendChild(el('span', { 'class': file ? 'file' : '' }, esc(file || LANG_LABEL[lang] || lang)));
      var btn = el('button', { 'class': 'btn', type: 'button' }, '复制');
      btn.addEventListener('click', function () {
        var done = function () { btn.textContent = '已复制'; setTimeout(function () { btn.textContent = '复制'; }, 1500); };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(code).then(done, function () { fallbackCopy(code); done(); });
        } else { fallbackCopy(code); done(); }
      });
      head.appendChild(btn);
      wrap.appendChild(head);
      var pre = el('pre');
      pre.appendChild(el('code', null, highlight(code, lang)));
      wrap.appendChild(pre);
      s.parentNode.replaceChild(wrap, s);
    });
  }
  function fallbackCopy(text) {
    var ta = el('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- layout ---------- */
  function buildLayout() {
    var main = document.querySelector('main.content');
    if (!main) return;

    var top = el('header', { 'class': 'topbar' });
    var menuBtn = el('button', { 'class': 'btn menu-btn', type: 'button' }, '目录');
    menuBtn.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    top.appendChild(menuBtn);
    top.appendChild(el('a', { 'class': 'brand', href: root + 'index.html' }, '<span>ROS2</span> 中文教材'));
    top.appendChild(el('div', { 'class': 'topbar-spacer' }));
    top.appendChild(el('span', { 'class': 'progress-mini', id: 'progress-mini' }));
    var themeBtn = el('button', { 'class': 'btn', type: 'button' }, theme === 'dark' ? '浅色模式' : '深色模式');
    themeBtn.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      store('theme', theme);
      themeBtn.textContent = theme === 'dark' ? '浅色模式' : '深色模式';
    });
    top.appendChild(themeBtn);

    var layout = el('div', { 'class': 'layout' });
    var side = el('nav', { 'class': 'sidebar' });
    var search = el('input', { 'class': 'search', type: 'search', placeholder: '搜索章节或关键词，如 qos、tf、nav2' });
    var list = el('div', { 'class': 'nav-list' });
    side.appendChild(search);
    side.appendChild(list);
    search.addEventListener('input', function () { renderNav(list, search.value); });

    var wrap = el('div', { 'class': 'main-wrap' });
    var toc = el('aside', { 'class': 'toc' });

    main.parentNode.insertBefore(top, main);
    main.parentNode.insertBefore(layout, main);
    layout.appendChild(side);
    layout.appendChild(wrap);
    layout.appendChild(toc);
    wrap.appendChild(main);

    renderNav(list, '');
    buildToc(main, toc);
    buildFooter(wrap);
    updateProgress();

    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('nav-open') && !side.contains(e.target) && e.target !== menuBtn) {
        document.body.classList.remove('nav-open');
      }
    });
  }

  function renderNav(list, query) {
    list.innerHTML = '';
    var q = query.trim().toLowerCase();
    var lastGroup = null;
    var count = 0;
    PAGES.forEach(function (p) {
      if (q) {
        var hay = (p.title + ' ' + (p.kw || '') + ' ' + (p.desc || '')).toLowerCase();
        var ok = q.split(/\s+/).every(function (t) { return hay.indexOf(t) !== -1; });
        if (!ok) return;
      }
      if (p.group !== lastGroup) {
        list.appendChild(el('div', { 'class': 'nav-group' }, esc(p.group)));
        lastGroup = p.group;
      }
      var cls = 'nav-item' + (p.id === pageId ? ' active' : '') + (isRead(p.id) ? ' done' : '');
      var a = el('a', { 'class': cls, href: root + p.file, title: p.desc || p.title });
      a.innerHTML = '<span class="dot"></span><span>' + esc(p.title) + '</span>';
      list.appendChild(a);
      count++;
    });
    if (!count) list.appendChild(el('div', { 'class': 'nav-empty' }, '没有匹配的章节'));
  }

  function slug(text, used) {
    var base = text.trim().toLowerCase().replace(/[\s/·:：，,（）()]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
    var s = base;
    var i = 2;
    while (used[s]) s = base + '-' + i++;
    used[s] = true;
    return s;
  }

  function buildToc(main, toc) {
    var heads = main.querySelectorAll('h2, h3');
    if (!heads.length) { toc.style.display = 'none'; return; }
    toc.appendChild(el('div', { 'class': 'toc-title' }, '本页目录'));
    var used = {};
    var links = [];
    Array.prototype.forEach.call(heads, function (h) {
      if (!h.id) h.id = slug(h.textContent, used);
      var a = el('a', { href: '#' + h.id, 'class': h.tagName.toLowerCase() }, esc(h.textContent));
      toc.appendChild(a);
      links.push({ a: a, h: h });
    });
    function spy() {
      var y = window.scrollY + 90;
      var cur = links[0];
      links.forEach(function (l) { if (l.h.offsetTop <= y) cur = l; });
      links.forEach(function (l) { l.a.classList.toggle('active', l === cur); });
    }
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  function buildFooter(wrap) {
    var idx = -1;
    PAGES.forEach(function (p, i) { if (p.id === pageId) idx = i; });
    if (idx === -1) return;

    if (pageId !== 'home') {
      var actions = el('div', { 'class': 'page-actions' });
      var btn = el('button', { 'class': 'btn read-btn', type: 'button' });
      function sync() {
        var r = isRead(pageId);
        btn.textContent = r ? '已完成本页（点击取消）' : '标记本页为已完成';
        btn.classList.toggle('done', r);
      }
      btn.addEventListener('click', function () {
        store('read:' + pageId, isRead(pageId) ? null : '1');
        sync();
        renderNav(document.querySelector('.nav-list'), document.querySelector('.search').value);
        updateProgress();
      });
      sync();
      actions.appendChild(btn);
      wrap.appendChild(actions);
    }

    var pager = el('div', { 'class': 'pager' });
    var prev = PAGES[idx - 1];
    var next = PAGES[idx + 1];
    if (prev) pager.appendChild(el('a', { href: root + prev.file, 'class': 'prev' }, '<div class="label">上一页</div>' + esc(prev.title)));
    else pager.appendChild(el('div', { style: 'flex:1' }));
    if (next) pager.appendChild(el('a', { href: root + next.file, 'class': 'next' }, '<div class="label">下一页</div>' + esc(next.title)));
    wrap.appendChild(pager);
  }

  function chapters() { return PAGES.filter(function (p) { return /^ch\d+$/.test(p.id); }); }

  function updateProgress() {
    var chs = chapters();
    var done = chs.filter(function (p) { return isRead(p.id); }).length;
    var mini = document.getElementById('progress-mini');
    if (mini) mini.textContent = '已完成 ' + done + ' / ' + chs.length + ' 章';
    var bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = Math.round(done * 100 / chs.length) + '%';
    var text = document.getElementById('progress-text');
    if (text) text.textContent = done + ' / ' + chs.length + ' 章（' + Math.round(done * 100 / chs.length) + '%）';
    var cards = document.querySelectorAll('.card[data-id]');
    Array.prototype.forEach.call(cards, function (c) { c.classList.toggle('done', isRead(c.getAttribute('data-id'))); });
  }

  /* ---------- home cards ---------- */
  function renderCards() {
    var grid = document.getElementById('chapter-cards');
    if (!grid) return;
    chapters().forEach(function (p) {
      var n = p.title.split('.')[0];
      var a = el('a', { 'class': 'card', href: root + p.file, 'data-id': p.id });
      a.innerHTML = '<div class="card-num">第 ' + n + ' 章 · ' + esc(p.group.split('·')[1] || '') + '</div>' +
        '<div class="card-title">' + esc(p.title.replace(/^\d+\.\s*/, '')) + '</div>' +
        '<div class="card-desc">' + esc(p.desc || '') + '</div>';
      grid.appendChild(a);
    });
  }

  /* ---------- checklists ---------- */
  function renderChecklists() {
    var lists = document.querySelectorAll('ul.checklist');
    Array.prototype.forEach.call(lists, function (ul, li) {
      Array.prototype.forEach.call(ul.children, function (item, i) {
        var key = 'check:' + pageId + ':' + li + ':' + i;
        var span = el('span', null, item.innerHTML);
        var box = el('input', { type: 'checkbox' });
        box.checked = store(key) === '1';
        item.classList.toggle('checked', box.checked);
        box.addEventListener('change', function () {
          store(key, box.checked ? '1' : null);
          item.classList.toggle('checked', box.checked);
        });
        item.innerHTML = '';
        item.appendChild(box);
        item.appendChild(span);
      });
    });
  }

  renderCode();
  renderCards();
  renderChecklists();
  buildLayout();
})();
