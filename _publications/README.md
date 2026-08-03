---
published: false   # 说明文件，不参与构建
---

# 论文放这里

一篇论文一个文件，按年份建子目录，例如 `_publications/2026/paper-name.md`：

```yaml
---
title:      "Paper Title"
date:       2026-05-12 00:01:00 +0800
selected:   true            # true 才会出现在首页 Selected Publications
pub:        "CVPR"
pub_date:   "2026"
abstract: >-
  一两句话的 TLDR，不要放完整摘要。支持 LaTeX：$a=b+c$。
cover:      /assets/images/covers/your-cover.jpg
authors:
  - Wenbin Zuo
  - Co-author
links:
  Paper: https://arxiv.org/abs/...
  Code: https://github.com/wbzuo/...
---
```

`semantic_scholar_id` 字段可选，填了会自动显示引用数。
