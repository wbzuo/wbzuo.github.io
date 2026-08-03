---
published: false
---

# News 条目怎么写

一条一个文件，文件名随意，排序看 `date`。

```yaml
---
title: 'Started my Ph.D. at <strong>Tongji University</strong>.'
date: 2025-09-01 00:01:00 +0800
---
```

- `title` 支持 HTML（`<strong>` `<a href>` 等）
- 页面按年份自动分组，右侧显示月日
- 首页最多显示几条由 `_data/display.yml` 的 `num_news` 控制
- 加 `published: false` 可以临时藏起某条

想给某条加高亮徽章：

```yaml
title: '获得某某奖 <span class="badge badge-pill badge-success">Featured</span>'
```
