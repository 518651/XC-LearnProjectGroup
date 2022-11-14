# 从Hello到React JSX语法(教程1)

<!-- vscode-markdown-toc -->
* 1. [引入](#)
	* 1.1. [React是怎样编写的?](#React)
* 2. [快速编写基本语句](#-1)
* 3. [验证是否成功](#-1)
* 4. [本教程所有代码](#-1)
		* 4.1. [index.html代码:](#index.html:)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name=''></a>引入

###  1.1. <a name='React'></a>React是怎样编写的?

`在html中引入React语法,再去查询官方文档看看能进行什么操作.`



##  2. <a name='-1'></a>快速编写基本语句

1.创建一个`html`文件并写出标准框架

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/htmlcode.png)

Tips:在html文件中直接输入`!`出来的第一条语句就是Html基本框架

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/htmlBuild.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello,React</title>
</head>
<body>
</body>
</html>
```

2.在html下的body标签下创建一个`id=root`的div容器

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/div.png)

```html
<div id="root"></div>
```

3.创建一个`index.js`文件并引入React库

```jsx
import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库
```

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/ImportRepoer.png)

4.创建一个虚拟的DOM

```jsx
const VDOM = <h1>Hello,React!</h1>
```

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/createVdom.png)

5.将虚拟的DOM渲染到指定的节点

使用函数:`ReactDOM.render(渲染的DOM对象,需要渲染到的节点)`

```jsx
ReactDOM.render(VDOM,document.getElementById('root'))
```

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/Rendering.png)

##  3. <a name='-1'></a>验证是否成功

打开终端输入:`npm start`  稍等一会会自动打开网页

成功界面如下:

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/Success.png)



##  4. <a name='-1'></a>本教程所有代码

####  4.1. <a name='index.html:'></a>index.html代码:

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/htmlSuccesscode.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello,React</title>
</head>
<body>
  <div id="root">
    
  </div>
</body>
</html>
```



index.js代码

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/01_React_Hello/prc/Success-Code.png)

```jsx
import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库

// 创建一个虚拟的dom
const VDOM = <h1>Hello,React!</h1>

// 将虚拟的DOM渲染到指定的节点
ReactDOM.render(VDOM,document.getElementById('root'))
```

