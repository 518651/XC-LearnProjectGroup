import React from 'react'
import ReactDOM  from 'react-dom'

class Proson extends React.Component{
    render(){
        console.log(this)
        const {name,age,sex} = this.props
        return (
            <ul>
               <li>姓名:{name}</li>
               <li>性别:{sex}</li>
               <li>年龄:{age+1}</li>
            </ul>     
        )
    }
}

//? 记得加入 <script src="https://cdn.bootcss.com/prop-types/15.6.1/prop-types.js"></script> 代码


//对标签属性进行类型，必要性限制
Proson.prototype = {
    name:PropsTypes.string.isRequired,//限制name必传,且为字符串
    sex:PropsTypes.string,//限制为字符串
    age:PropsTypes.number,//限制为数字
    speak:PropsTypes.func,//限制speak为函数
}
Proson.defaultProps = {//指定默认标签属性值
    sex:'男',//sex默认值为男
    age:18//age的默认值为18
}



//渲染组件到页面
ReactDOM.render(<Proson name="jerry" age="18" sex="男"/>,document.getElementById('root'))
ReactDOM.render(<Proson name="tom" age="18" sex="男"/>,document.getElementById('test1'))

const p = {name:'Who',age:18,sex:'女'}
ReactDOM.render(<Proson {...p}/>,document.getElementById('test2'))
