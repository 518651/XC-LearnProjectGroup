import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



// 1.创建类式组件
class Demo extends React.Component{ //继承React.Component
    //React中规定如果要用类去定义一个组件,就要去继承React中内置类:
    render(){
        // render放在什么地方的? ---类的原型对象，供实例使用
        // render中的this是谁? ---类的实例对象<=>类组件实例对象
        return <h2>我是类定义的组件(适用于复杂组件)的定义</h2>
    }
}

// 2.渲染到页面
ReactDOM.render(<Demo/>,document.getElementById('root'))
/*
    执行了ReactDOM.render(<Demo/>,docum.....)发生了什么？
    1.React解析组件标签,找到了Demo组件
    2.发现组件是使用类定义的,随后new出来该类的实例，并通过调用到原型上的render方法
    3.将render返回的虚拟DOM转为真实DOM,随后呈现在页面中
*/