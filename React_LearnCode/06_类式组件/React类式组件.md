# React-类式组件

## 导航

<!-- vscode-markdown-toc -->
* 1. [导航](#)
* 2. [拆分讲解类组件](#-1)
    * 2.1. [创建类](#-1)
    * 2.2. [构造器](#-1)
        * 2.2.1. [是否需要写构造器?](#-1)
        * 2.2.2. [必须在类组件里面定义render函数且必须有返回值](#render)
* 3. [问题](#-1)
    * 3.1. [Q1:render函数是放在什么地方的?](#Q1:render)
    * 3.2. [Q2:render的实例在什么地方?](#Q2:render)
    * 3.3. [Q3:render中的this是谁?](#Q3:renderthis)
* 4. [总结:](#:)
* 5. [代码:](#:-1)

<!-- vscode-markdown-toc-config
    numbering=true
    autoSave=true
    /vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->



----

## 拆分讲解类组件

### 创建类

在前面的函数式组件中我们知道需要定义一个函数,类组件同理也需要创建一个类:

> 类关键字 类名称 extends React.Coponent{}

:warning:注意：类名就是类组件名，`class Demo{}`只是创建了一个叫**Demo**类,并不是React中的类式组件,*需要**继承React预定义的React.Component类才是***



### 构造器

类式组件本质就是一个**A类继承B类**的过程,写完定义我们知道需要写构造器，写完就需要调用super函数.可问题是我们真的

#### 是否需要写构造器?

除非你需要单独写一个React方法，否则可以不写构造器,完全可以省略的。

#### 必须在类组件里面定义render函数且必须有返回值

```jsx
class Demo extends React.Component{
	render(){
		return <h2>sth</h2>
	}
}
```



## 问题

### Q1:render函数是放在什么地方的?

> 类的原型对象上,供实例使用

### Q2:render的实例在什么地方?

> 在React.render解析组件标签,找到了类组件,随机new出来该类的实例,并通过该实例调用到原型上的render方法

### Q3:render中的this是谁?

> 类的实例对象或者说是类组件的实例对象

## 总结:

> 1.构造完成一个类组件后**必须继承React.Component**
>
> 2.必须写render函数而且必须有返回值





## 代码:

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/06_%E7%B1%BB%E5%BC%8F%E7%BB%84%E4%BB%B6/picture/code.png)