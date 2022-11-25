# State简写方式、总结

## 为什么要简写State?

首先我们先定义一个拥有3个回调函数的类,并统一修改this指向问题

```jsx
class Weather extends React.Component{
	constructor(props){//传进来的参数用props，三大属性之一,后面会讲
		super(props)//为什么要调用这个函数,不需要我多说了吧?
		this.state = {isHot:true}
		this.touchme = this.touchme.bind(this)
		this.demo1 = this.demo1.bind(this)
		this.demo2 = this.demo2.bind(this)//3个还好,多如果有5个...10个呢
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
		this.touchme = this.touchme.bind(this)
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
    
    demo1(){
        
    }
    
    demo2(){
        
    }
}
```

可以看到,不管是定义和修改this指向都过于重复的代码,复用率不高,顾我们要一种精简的写法





## 简写State初始化

> 最开始,我们想初始化this.state受于没有地方写了,顾定义了一个构造器,并在构造器中编写初始化

在修改`this.state = {isHot:true}`简写之前,我们先复习下类知识

```
class Weather extends React.Component{
	constructor(props){
		super(props)
		this.state = {isHot:true}
		this.touchme = this.touchme.bind(this)   
	}
	render(){  
		return <h1 onClick={()=>this.touchme()  }>今天天气很{this.state.isHot ? '炎热': '凉爽' }</h1>
	}

    touchme(){
		const isHot = this.state.isHot
		this.setState({isHot:!isHot})
    }
    
}
```



首先我们定义一个车子的类,里面有汽车品牌、价格属性

```jsx
class Car{
	coustructor(name,price){
		this.name = name
		this.price = price
	}
}
```

这个时候,我们引入在初始化state时,被迫在构造器中定义的方法:我们想定义汽车轮子的属性,并给定值=4

```jsx
class Car{
	coustructor(name,price){
		this.name = name
		this.price = price
		this.wheel = 4
	}
}
```

现在我们开始简写`this.wheel = 4`的写法

```jsx
class Car{
	coustructor(name,price){
		this.name = name
		this.price = price
	}
	//类中可以直接写赋值语句,如下代码的含义是:给Car的实例对象添加一个属性,名为wheel,值为4
	wheel = 4
}
```

> 类中可以直接写赋值语句,如下代码的含义是:给Car的实例对象添加一个属性,名为wheel,值为4

现在我们知道了类里面可以写赋值语句,那么我们就把state初始化直接写入类里面

```jsx
class Weather extends React.Component{
	constructor(props){
		super(props)
		this.touchme = this.touchme.bind(this)   
	}
    state ={isHot:true}
	render(){  
		return <h1 onClick={()=>this.touchme()  }>今天天气很{this.state.isHot ? '炎热': '凉爽' }</h1>
	}
    touchme(){
		const isHot = this.state.isHot
		this.setState({isHot:!isHot})
    }
}
```

回到页面点击标题，一切正常



## 简写this指向

下面,我们将开始修改`this.touchme = this.touchme.bind(this)`写法,在开始简写代码之前,要知道修改this的目标是让函数体内的this可以指向类式组件的实例对象

```
class Weather extends React.Componet{
	state ={isHot:true} //初始化状态
	render(){
		return <h1 onClick={()=>this.torchme()}>今天天气很{this.state.ishot? '炎热':'凉爽'}</h1>
	}
	torchme = ()=>{
		const isHot = this.state.isHot
		this.setState({isHot:!isHot})
	}
}
```

> 写法分析:
>
> 箭头函数有一大特点,没有自己的this.但是如果在箭头函数里面使用了关键字,不会报错,因为箭头函数会找其外层函数的this用了.
>
> 在本次简写中,箭头函数的this指向就是Weather的实例对象,也就是说和this.touchme = this.touchme.bind(this) 代码作用想同

----

**总结下自定义方法:**

> 自定义方法---要用赋值语句的形式+箭头函数



## CODE

### 简写前代码:

![](F:\Project\Javascript\UI\React_LearnCode\08_state简写_总结\picture\code_faild.png)





### 简写后

![](F:\Project\Javascript\UI\React_LearnCode\08_state简写_总结\picture\code_success.png)