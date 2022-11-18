import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



// 1.创建类式组件
class Demo extends React.Component{ //继承React.Component
    //React中规定如果要用类去定义一个组件,就要去继承React中内置类:
    render(){
        return <h2>我是类定义的组件(适用于复杂组件)的定义</h2>
    }
}

ReactDOM.render(<Demo/>,document.getElementById('root'))