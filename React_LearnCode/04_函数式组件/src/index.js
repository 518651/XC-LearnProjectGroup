import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



//创建函数式组件
function Demo(){
    return <h2>我是用函数定义的组件(适用于[简单组件]的定义)</h2>
}

ReactDOM.render(<Demo/>,document.getElementById('root'))