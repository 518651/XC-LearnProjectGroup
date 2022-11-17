# React函数式组件

## 导航



----



## 目标:

**通过使用函数式组件在html节点上打印字符串**



## 定义

### 什么是组件?

> 用来实现局部功能效果的代码和资源的集合(html/css/image等等)

### 有什么作用?

> 复用编码,简化项目编码,提高运行效率



### 引入概念

> 组件化:
>
> 当应用以多组件的方式实现,可以称此应用为组件化的应用

----



## 怎么定义函数组件?

### 定义方法:

> function 函数名称(参数){
>
> ​	代码语句
>
> }



Example:定义一个函数,名为:Demo,返回值为<h2>的标签

```jsx
function Demo(){
	return <h2>我是用函数定义的组件(适用于【简单组件】的定义)
}
```





## 实现目标:

```jsx
//创建函数式组件
function Demo(){// 这里函数名称必须大写
    console.log(this) // 此处的this 是undefined ,因为babel编译后开启了严格模式
    return <h2>我是用函数定义的组件(适用于[简单组件]的定义)</h2>//函数必须有返回值
}

// 渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('root'))//参数1的位置必须写组件标签,别直接写组件的名称
/*
    执行了ReactDom.render(<Demo/>....之后发生了什么?)
    1.React解析组件标签,然后找到了Demo组件.如果找不到Demo组件就会报:'Demo' is not defined
    2.发现组件是使用函数定义的,随后调用该函数,将返回的虚拟Dom转为真实Dom,然后呈现在页面中

*/

```

![](https://github.com/518651/XC-LearnProjectGroup/tree/main/React_LearnCode/04_%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6/prctrue/code.png)