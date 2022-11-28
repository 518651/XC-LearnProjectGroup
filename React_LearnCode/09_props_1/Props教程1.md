# Props教程一

## 导航



# Props基本实现

## 目标效果:

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/09_props_1/Pictrue/target.png)



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

