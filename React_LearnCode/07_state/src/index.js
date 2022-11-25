import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



// 1.创建类式组件
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		this.state = {isHot:true}
		this.touchme = this.touchme.bind(this)
	}
	render(){
        console.log(this);
		return <h1 onClick={()=>this.touchme()  }>今天天气很{this.state.isHot ? '炎热': '凉爽' }</h1>
	}

    touchme(){
        console.log(this);
		//ishot取反
		//获取原来ishot的值
		const isHot = this.state.isHot
		//严重注意,状态(state)不可直接更改
		//this.state.isHot = this.state.isHot  //错误代码
		this.setState({isHot:!isHot})
		console.log(this.state.isHot)
    }
}

ReactDOM.render(<Weather/>,document.getElementById('root'))
