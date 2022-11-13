import React from 'react'
import ReactDOM  from 'react-dom'

//1. 创建虚拟DOM
const VDOM = <h1 id="title"><span>Hi,Walcome Learn React DOM</span></h1>
//2. 渲染虚拟DOM到页面
ReactDOM.render(VDOM,document.getElementById('root')) //? ReactDOM.render(虚拟的DOM,容器挂载节点)
