# wbzuo.github.io

左文彬的个人学术主页。基于 [academic-homepage](https://github.com/luost26/academic-homepage)
（MIT License, Copyright (c) 2024 Shitong Luo）修改，只保留单页布局。

## 改内容改哪里

日常更新基本只碰 `_data/profile.yml` 和 `_news/`：

| 要改什么 | 改哪个文件 |
|---|---|
| 姓名、身份、简介、邮箱、社交链接 | `_data/profile.yml` |
| 教育经历 / 工作经历 / 荣誉 / 学术服务 | `_data/profile.yml` |
| News | `_news/` 一条一个文件 |
| 论文 | `_publications/<年份>/` 一篇一个文件 |
| 各板块显示开关、News 条数 | `_data/display.yml` |
| 导航栏 | `_data/navigation.yml` |
| 作者加粗与合作者链接 | `_data/authors.yml` |
| 头像 | `assets/images/photos/portrait.jpg` |
| 校徽 | `assets/images/badges/` |

**带 `published: false` 的是占位文件，不会出现在页面上。** 填好真实内容后删掉那一行。

## 本地预览

```bash
bundle install
bundle exec jekyll build
python3 -m http.server 4000 -d _site
```

`jekyll serve` 在 Ruby 3.x 下不可用（webrick 已移出标准库、pathutil 在文件监听中报错），
用上面的 build + 静态服务代替。

## 与上游的差异

- 只保留 `index_layout2` 这一种首页，删除 Blog / Showcase / 独立 Publications 页
- 修复：`item.logo` 为空时渲染出空 `<img src="">`（alt 文本被挤成竖排）
- 修复：论文数为 0 时仍渲染出只有标题的空卡片
- 新增：`experience_card` 的 Academic Service 板块

## 引用数显示

新模板通过 Semantic Scholar 拉取单篇论文的引用数：在论文的 front matter 里填
`semantic_scholar_id`，前端会自动查询并显示。

原 academicpages 的 Google Scholar 爬虫（每日 cron + `google-scholar-stats`
分支）已删除——新模板不读它的输出，且远端从未生成过该分支。需要总引用数徽章
的话可以从 git 历史恢复：`git log --all -- google_scholar_crawler`。

## 许可

模板部分见 `LICENSE`（MIT）。内容与图片版权归左文彬所有；校徽为两校资产。
