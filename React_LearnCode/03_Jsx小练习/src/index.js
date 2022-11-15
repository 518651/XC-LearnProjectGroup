import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库


const data = ['Augular','React','Vue']

//. 1. 创建虚拟dom
    const VDOM = (
        <div>
            <h1>前端框架JS列表</h1>
            <ul>
                {
                    data.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                    
                }
            </ul>
        </div>
    )
// 将虚拟的DOM渲染到指定的节点
ReactDOM.render(VDOM,document.getElementById('root'))