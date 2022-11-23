# State的理解、初始化、事件绑定

## 导航







# 引入

----

> 什么是简单组件?什么是复杂组件?

复杂组件定义:如果组件是**有状态(State)**的,即是复杂组件

简单组件定义:如果组件**没有状态(State)**的,即是简单组件



> 什么是状态?

简单理解:**组件的状态驱动着页面**

我们拿到数据后再放入状态当中,数据的改变就会驱动页面的展示

----

# 课程实现目标

## 实现效果

![](F:\Project\Javascript\UI\React_LearnCode\07_state\picture\Statetaget.png)

## 说明:

> 通过鼠标点击事件修改页面内容,点击一下,页面上的内容需要在今天天气很`炎热`和`凉爽`之间切换



## 思路:

> 分析需求:
>
> 目标需要在今天天气很?后按照特定条件变换修改为炎热和凉爽,可以视为 特定条件-->state-->修改为炎热or凉爽

~~~mermaid
graph LR
	A[鼠标按下]--修改-->B[bool_是否炎热]
	B[bool_是否炎热]--True-->C[今天天气炎热]
	B[bool_是否炎热]--False-->D[今天天气凉爽]
	
	
~~~





----

# State初始化实现部分效果

## 步骤

1.创建组件

```jsx
class Weather extends React.Component{
    render(){
        return <h1>今天天气很炎热</h1>
    }
}

React.render(<Weather/>,document.getElamentByid('root'))
```



2.编写构造器

> 这里因为原生React是没有帮实现state接参数的办法,所以我们需要写一个构造器

```
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		
	}
	render(){
		return <h1>今天天气很炎热</h1>
	}
}
```



2.1 STATE的初始化

> State是在构造器中的属性,在给其赋数据时,需要用this.state={数据表达式1,数据表达式2}
>
> 单个数据可以用:this.state=你的数据表达式1,多数据需要用对象包起来

```jsx
this.state = {ishot:true}
```

```
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		this.state = {ishot:true}
	}
	render(){
		return <h1>今天天气很炎热</h1>
	}
}
```



2.2 同步修改目标

> 使用JSX的值传递语法,套用三目运算符进行值修改

```jsx
return <h1>今天天气很{this.state.ishot ? '炎热' : '凉爽' }</h1>
```

```
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		this.state = {ishot:true}
	}
	render(){
		return <h1>今天天气很{this.state.ishot ? '炎热' : '凉爽' }</h1>
	}
}
```



3.全部代码

```jsx
import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



// 1.创建类式组件
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		this.state = {isHot:true}
	}
	render(){
        console.log(this);
		return <h1>今天天气很{this.state.isHot ? '炎热': '凉爽' }</h1>
	}
}

ReactDOM.render(<Weather/>,document.getElementById('root'))
```



## 截图

实现效果截图:

![]()

代码截图:

![]()



# React中的事件绑定

## 事件绑定的方法

### 原生事件绑定

HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>原生事件绑定</title>
</head>
<body>
    <button id="btn1">按钮1</button>
    <button id="btn2">按钮2</button>
    <button id="btn3">按钮3</button>
</body>
</html>
```



1.`addEventListener`方法添加事件-btn1添加弹窗事件

1.1寻找节点

```
  const btn1 = document.getElementById('btn1')
```

1.2 给对象添加点击事件-事件内容:弹出窗体打印字符串

```
btn1.addEventListener('click',()=>{
            alert('按钮一被点击了')
})
```

全部代码:

```javascript
    <script>
        const btn1 = document.getElementById('btn1')
        btn1.addEventListener('click',()=>{
            alert('按钮一被点击了')
        })
    </script>
```



2.`onclick`方法添加点击事件

```
const btn2 = document.getElementById('btn2')
btn2.onclick = ()=>{
	alert('按钮二被点击了')
}
```



3.直接在HTML中添加`onclick事件`

```html
 <button onclick="touchme()">按钮3</button>
```

每次Button被点击后,调用`touchme`函数

```javascript
<script>
	function touchme(){
       alert('按钮三被点击了')
    }
</script>
```





## React事件绑定

### 在React中用原生事件绑定:



### addEventListener方法绑定

#### 添加id属性

```html
return <h1 id='title'>今天天气很{isHit ? '炎热' ： '凉爽'}</h1>
```

#### 事件绑定

```jsx
const title = document.getElementById('title')
title.addEventListener('click',()=>{
    console.log('标题被点击');
})
```



### onclick方法绑定

```
const title = document.getElementById('title')
title.onclick()=>{
	console.log('标题被点击了');
}
```



> 虽然这两种原生方法都可以绑定事件,但是不建议使用,请多使用React的方法绑定:

### React方法绑定事件

### onClick方法绑定

#### 在构造器里面定义一个回调函数:

> 注意:我们现在写的不是原生样式,函数名称请参考React重新写的名称
>
> 在React中点击事件是:onClick,不是原生的onclick.注意区分

```
class Weather extends React.Component(){
	constructor(props){
		super(props)
		this.
	}
}
```

