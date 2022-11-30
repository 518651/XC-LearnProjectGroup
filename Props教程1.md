# Props教程一

## 导航



# Props基本实现

## 目标效果:

![](F:\Project\Javascript\UI\React_LearnCode\09_props_1\Pictrue\target.png)



## 知识点:

### 什么是props?

> 在使用一个组件的时候希望这个组件可以复用，希望他里面的形态、所需的数据可以在我们调用的时候可以动态的传进去。



### Props哪里来的?

> 使用类创建的时候你需要继承 [React](https://so.csdn.net/so/search?q=React&spm=1001.2101.3001.7020).component，这个 props 就是继承React 来的

![](https://img-blog.csdnimg.cn/20200522083956666.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0MTYzMjY5,size_16,color_FFFFFF,t_70)





### 传递属性:

```jsx
<组件名 属性名=值 属性名2=值2 .. />

propName="字符"  propName={js数据类型}
```

:warning:请注意:

- **调用组件名的时候可以传递一个或多个属性**
- **属性的名字是小驼峰**
  - 他的值双引号就是字符串
  - 单花括号就是 jsx 的表达式
  - 表达式就是一个对象后面掉一个 api() 就是一个表达式，声明一个变量就是语句了，调用一个变量就是表达式了



### **使用属性**

```
{this.props.属性名}
```

- **this代表的是组件本身（将来的实例）**
  - 类里面使用this它指向的是组件本身
  - 组件本身是有props的,通过this.props.xxx来获取具体的值
- **对象无法直接通过{对象展示}**
  - react在react-dom渲染时，数据里面的对象无法拿出来直接加载,要精确到里面的键才行



## **使用展示：**

```jsx

import React from 'react';
import ReactDom from 'react-dom';

//props  传递给组件的属性（数据）
class Nav extends React.Component{
  render(){
    return (
      <nav>
        <a>{this.props.json.aa}</a>
        <a href="http://www.baidu.com">react</a>
        <a href="http://www.baidu.com">组件</a>
      </nav>
    );
  }
}
class App extends React.Component{
  render(){
    return (
      <div>
        <Nav json={{aa:1,bb:2}}/>
        <Footer text="copy right heheda123"/>
      </div>
    )
  }
}

ReactDom.render(
  <App/>,
  document.querySelector('#root')
);


```

![](https://img-blog.csdnimg.cn/20200522090353649.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0MTYzMjY5,size_16,color_FFFFFF,t_70)

## 实现代码:

```jsx
import React from 'react'
import ReactDOM  from 'react-dom'

class Proson extends React.Component{
    render(){
        console.log(this)
        const {name,age,sex} = this.props
        return (
            <ul>
               <li>姓名:{name}</li>
               <li>性别:{sex}</li>
               <li>年龄:{age}</li>
            </ul>     
        )
    }
}

//渲染组件到页面
ReactDOM.render(<Proson name="jerry" age="18" sex="男"/>,document.getElementById('root'))

```



# 批量传递props

## 参数多怎么传递

上诉Example中每一个只有三个信息,也不会显的很长，但是如果有12个信息呢?



```jsx
const p = {name='老刘',age=18,sex='女'}
ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex}>)
```

### **React中批量传递props方法(展开运算符)**:

```jsx
const p = {name='老刘',age=18,sex='女'}
ReactDOM.render(<Person {..p}>)
```

> 请注意:要使用展开运算符必须满足每组数据传入标签是和构造器中定义的标签是一致的.否则数据会接不上

#### 展开运算符对数组操作:

```jsx
ler arr1=[1,3,5,7,9]
ler arr2=[2,4,6,8,10]
```



> 展开一个数组

```jsx
console.log(...arr1);展开一个数组
```



> 拼接数组

```jsx
ler arr3 = [...arr1,...arr2]//拼接两个数组
console.log(...arr3)
```



#### 展开运算符对函数操作



```jsx
//函数传参
funtion sum(...number){
	console.log('@',number);
	//如果需要计算求和使用
	return number.reduce((preValue,currenValue)=>{
		return preValue+currenValue
	})
}
console.log(sum(1,2,3,4))
```



#### 注意点:

##### 展开运算符不能展开对象

```
let person={name:'tom',age:18}
let person2 = person
console.log(...person); 报错
```







