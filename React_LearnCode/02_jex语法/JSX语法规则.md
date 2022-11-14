<!-- vscode-markdown-toc -->
# JSX语法规则

##  1. <a name=''></a>导航


* 1. [导航](#)
* 2. [TODO](#TODO)
* 3. [规则总结](#-1)
	* 3.1. [JSX语法规则](#JSX)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


##  2. <a name='TODO'></a>TODO

1. 通过值传递创建虚拟dom
2. 多元素组合使用
3. 总结jsx语法



##  3. <a name='-1'></a>规则总结

###  3.1. <a name='JSX'></a>JSX语法规则

> 1.定义虚拟Dom时,不能写引号.这不是一个字符串,而是一个Object对象

**正确写法:**

```jsx
const VDOM =<h1>This is VDom example</h1>
```

:warning: 错误写法:

```jsx
const VDOM ='<h1>This is VDom example</h1>'
```



> 标签中混入js表达式要用{}

在历史学习其他语言的时,能直接将附好初值的变量带入表达式中进行操作。但在JSX中使用要带{}把变量括起来以告知jsx为变量使用,否则jsx将会作为字符串进行操作。

**正确写法:**

```jsx
const Mydata = 'title'
const VDOM = <h1>{Mydata}</h1>
```

:warning:错误写法：

```jsx
const Mydata = 'title'
const VDOM = <h1>Mydata</h1>
```



> 样式的类名指定不要用class,要用className

实际开发中,默认的React的样式不满足使用,需要套用自定义样式.套用样式在HTML中定义class即可,但在JSX中需要定义的是**className**.

**正确写法:**

```jsx
const VDOM = <h1 className='title'>{Mydata}</h1>
```

:warning:错误写法:

```jsx
const VDOM = <h1 class='title'>{Mydata}</h1>
```



> 内联样式,要用style={{key:value}}的形式去写

Example:现需求在span标签中修改样式为字体为白色,字体大小为:29px

Html中写法为:warning: :

```html
const VDOM = <span style=":color=while,fonsize='29px'">{Mydata}</h1>
```

**JSX中为：**

```jsx
const VDOM = <span style={{color:'while',fonsize:'29px'}}">{Mydata}</h1>
```



> 只有一个根标签

JSX中不能像HTML-Body节点一般可使用多个根标签

错误写法:warning: ：

```jsx
const VDOM = (
        <h1>this a h1 tag</h1>
        <p></p>  
)
```

遇到此情况解决对策为:在两个根标签外再加入一个容器

正确写法:

```jsx
const VDOM = (
    <div>
        <h1>this a h1 tag</h1>
        <p></p>
    </div> 
)
```



> 标签必须闭合

这个无需多叙述,若不懂请直接看对应视频



> 标签首字母大小写注意

1.若小写字母开头,则JSX在翻译的过程中会转为HTML中同名元素,若HTML中无同名元素,则抛出异常

2.若大写字母开头,React便会去渲染对应的组件,若组件没有定义,则抛出异常

```
const VDOM = (
    <div>
        <h1>this a h1 tag</h1> //正确,JEX会转为html对应的h1标签
        <H1>this a face h1 tag</H1> //IDE抛出异常,因为找不到H1对应的组件定义
    </div> 
)
```

