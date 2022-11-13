# React入门学习-启动默认项目模板



##  React的介绍

> React 的历史背景和基本概念

React最开始为Fackbook的内部项目,因为当时Fackbook对市面上的JavaScript MVC框架都不满意,就直接自己写一套,经过验证后架设Instagram网站,于2013年5月开源

React为最流行的前端框架之一，前端工程师必会技能之一,Tencent和Aili均使用它



React官网介绍:

![img](https://img-blog.csdnimg.cn/2aeebb42db3249d482a68f7be7168861.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5YmN56uv6Lev5ZWK,size_20,color_FFFFFF,t_70,g_se,x_16)

React 是一个用于构建用户界面的 JavaScript 库。可以理解它只负责 MVC 中的视图层渲染，不直接提供数据模型和控制器功能。react-router 实现路由，redux 实现状态管理，可以使用它们来构建一个完整应用.

**总结：** React 是 Facebook 开源的，现在它是最流行的前端框架大厂必备，React 本身是一个构建 UI 的库，如果需要开发一个完整的 web 应用需要配合 react-router，redux，...等.

## React 特点

> 了解 react 的三个核心特点

### （1）声明式

React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。 以声明式编写 UI，可以让你的代码更加可靠，且方便调试。

![img](https://img-blog.csdnimg.cn/6627f013743a45a49dfc88ad9fb3fef4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5YmN56uv6Lev5ZWK,size_20,color_FFFFFF,t_70,g_se,x_16)



### （2）组件化

创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。 组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。

![img](https://img-blog.csdnimg.cn/5613db159f9f4dbab4bb6105b17b685d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5YmN56uv6Lev5ZWK,size_20,color_FFFFFF,t_70,g_se,x_16)



###  (3）一次学习，跨平台编写

![img](https://img-blog.csdnimg.cn/47d56a342e404175954f76028143e8b4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5YmN56uv6Lev5ZWK,size_20,color_FFFFFF,t_70,g_se,x_16)

**总结：** 声明式 UI 更清晰快捷，组件化开发更灵活，可支持 SSR,SPA ,NativeApp,VR 多平台。



## React 脚手架

> 掌握使用 create-react-app 脚手架创建项目

创建项目方式：

- 全局安装脚手架再使用命令创建项目
- 使用 npx 远程调用脚手架创建项目



## 通过Vscode安装启动默认项目模板



::warning: 注意:因为node的服务器在国外,下载速度出奇的慢,没有配置淘宝镜像请认真执行配置,**若已在配置环境篇配置过了,无需再配置**

::warning: 注意:因为node的服务器在国外,下载速度出奇的慢,没有配置淘宝镜像请认真执行配置,**若已在配置环境篇配置过了,无需再配置**

::warning: 注意:因为node的服务器在国外,下载速度出奇的慢,没有配置淘宝镜像请认真执行配置,**若已在配置环境篇配置过了,无需再配置**



### 配置npm 淘宝镜像

打开CMD,输入以下配置

- `npm config set registry https://registry.npm.taobao.org`

- 输入指令`npm config get registry`，显包含registry.npm.taobao.org，说明npm配置淘宝镜像已经完成了



### 安装React

1.创建一个文件夹,作为Raact的练习文件和配置文件存放(我这命名为:**reactenvs**),***命名不能有大写字母***

2.在Vscode中打开文件夹后并在上方点击导航栏--查看--终端，打开终端

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/20221112202537.png)

3.在终端输入`npx create-react-app ./`回车安装. 指令解析:npm 将会将react组件安装在当前根目录

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/React_installing.png)

安装时截图



![https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/20221112203100.png](https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/20221112203100.png)

安装之前的文件夹



![](https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/React_Folder_Beforce.png)

安装成功后的文件夹



4.启动默认React模板

继续输入:`npm start`

当控制台输出以下内容的时候同时也会打开浏览器(若没有打开,就手动访问http://localhost:3000/)

>Success! Created reactenvs at F:\Project\Javascript\UI\reactenvs
>Inside that directory, you can run several commands:
>
>Compiled successfully!
>
>You can now view reactenvs in the browser.       
>
>  Local:            http://localhost:3000        
>  On Your Network:  http://192.168.197.1:3000    
>
>Note that the development build is not optimized.
>To create a production build, use npm run build. 

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/front%20end/React_Pictrue/Hello_world/Success.png)

---

