import React,{Component} from 'react'
import hello from './Hello.module.css' 
//样式模块化注意点:
//1. css文件前面应该加一个module ==> xxx.module.css
//2. 导入css 样式时候需要一个变量名称去接着

export default class Hello extends Component{
    render(){
        return <h2 className={hello.title}>Hi,There React!</h2>
    }
}