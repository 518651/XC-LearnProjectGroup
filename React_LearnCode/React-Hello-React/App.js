import React,{Component} from 'react'
import Hello from './Component/Hello/Hello'
import Welcome from './Component/Welcome/Welcome'

//创建外壳组件并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                hello,react!
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}


