小程序开发需要的是前端技术，需要按照微信小程序规范去开发小程序的界面和发请求到私有的后端服务。
官方文档：[概览 | 微信开放文档] (https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

# 一、开发
## 1.新建一个页面的步骤如下：

1. 在项目根目录的 `pages` 文件夹下新建一个文件夹，文件夹的名字就是新页面的名字。
2. 在新建的文件夹中创建四个文件，分别是 `js`，`wxml`，`wxss` 和 `json` 文件，这四个文件的名字都应该是新页面的名字。
3. 在 `js` 文件中，定义页面的初始数据和方法。
4. 在 `wxml` 文件中，编写页面的结构。
5. 在 `wxss` 文件中，编写页面的样式。
6. 在 `json` 文件中，定义页面的配置。
7. 在 `app.json` 文件中的 `pages` 数组中添加新页面的路径。

## 2.例如：

（1）在 `pages` 文件夹下新建一个名为 `newPage` 的文件夹，然后在 `newPage` 文件夹中创建四个文件：`newPage.js`，`newPage.wxml`，`newPage.wxss` 和 `newPage.json`。

（2）在 `app.json` 文件中添加新页面的路径：
```json
{
  "pages": [
    "pages/newPage/newPage",
    // 其他页面路径
  ]
}
```

# 二、发布
1.需要替换掉根目录下project.config.json文件里的appid， appid从微信小程序的管理后台获取。



