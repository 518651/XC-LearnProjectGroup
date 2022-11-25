import React from "react"   //? 导入React 核心库
import ReactDOM from "react-dom" //? 导入React DOM库



// 1.创建类式组件
class Weather extends React.Component{
	state ={isHot:true}
	render(){
        console.log(this);
		return <h1 onClick={()=>this.touchme()  }>今天天气很{this.state.isHot ? '炎热': '凉爽' }</h1>
	}

    touchme=()=>{
        console.log(this);
		const isHot = this.state.isHot
		this.setState({isHot:!isHot})
    }
}

ReactDOM.render(<Weather/>,document.getElementById('root'))


