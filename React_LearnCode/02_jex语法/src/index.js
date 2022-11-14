import React from 'react'
import ReactDOM  from 'react-dom'

const title = 'title'
const char = 'hi,there'

//1. 创建虚拟DOM
const VDOM = <h1 id="{title}"><span>{char}</span></h1>

const SDOM = (
    <div>
        <h1 id="{title}">{char}</h1>
        <h2 id="{title}">{char}</h2>
    </div>
)


//2. 渲染虚拟DOM到页面
ReactDOM.render(VDOM,document.getElementById('root')) //? ReactDOM.render(虚拟的DOM,容器挂载节点)
