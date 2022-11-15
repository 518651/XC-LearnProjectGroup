import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库

// todo 通过值传递创建虚拟dom
// todo 多元素组合使用
// todo 总结jsx语法


const data = ['Augular','React','Vue']

//. 1. 创建虚拟dom
    const VDOM = (
        <div>
            <h1>前端框架JS列表</h1>
            <ul>
                {
                    data.map(item => {
                        return <li>{item}</li>
                    })
                    
                }
            </ul>
        </div>
    )
// 将虚拟的DOM渲染到指定的节点
ReactDOM.render(VDOM,document.getElementById('root'))