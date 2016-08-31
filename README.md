# netease-music-juke-box
高仿网易云音乐
使用网易云音乐的API接口，实现网易云音乐的播放列表, 搜索, 播放器功能的webApp。   

## 1. 技术概述
> * HTML 5 / CSS 3
* Webpack
* Gulp
* ES6 / ES7 / ES2015
* Babel
* jQuery
* LESS
* Font Icon

## 2. 安装
``` cmd

git clone https://github.com/lilongllong/netease-music-juke-box.git;
npm install //若不起作用，请使用npm install -dev
/*未使用gulp和webpack的环境，需执行一下命令*/
npm install -g gulp webpack webpack-dev-server;

```

## 3. 运行
### 3.1 启动
``` atom-cmd
gulp dev

```
### 3.2 浏览器打开

#### 浏览器预设置
需要跨域访问，调整浏览器的访问模式
<font size=4>"XXX\chrome.exe" ---args --disable-web-security --user-data-dir</font>
#### 访问地址
[http://localhost:8080](http://localhost:8080);

网易云音乐存在灰色音乐是无法播放的，原因不明

## 4 运行截图
![缺少图片](https://github.com/lilongllong/netease-music-juke-box/blob/master/img/netease-music.png?raw=true);
![缺少图片](https://github.com/lilongllong/netease-music-juke-box/blob/master/img/netease-music-li.png?raw=true);
