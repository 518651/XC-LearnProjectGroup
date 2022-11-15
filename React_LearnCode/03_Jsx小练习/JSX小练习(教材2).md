# JSX小练习(教程2)



##  1. <a name=''></a>导航

<!-- vscode-markdown-toc -->
* 1. [导航](#)
* 2. [本教程目标](#-1)
	* 2.1. [实现目标](#-1)
	* 2.2. [学习目标](#-1)
* 3. [要点:](#:)
* 4. [解释实现Code](#Code)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->



##  2. <a name='-1'></a>本教程目标

###  2.1. <a name='-1'></a>实现目标

> 用JSX语法实现以下效果(使用数组实现)

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/03_Jsx%E5%B0%8F%E7%BB%83%E4%B9%A0/prc/Target.png)



###  2.2. <a name='-1'></a>学习目标

> 在教程1的基础上继续深入学习React的语法规则,重点在规则:JSX表达式的使用



----

##  3. <a name=':'></a>要点:

**要点一:**

使用时,一定注意区`[JS语句(代码)]`与`[JS表达式]`

> Q:什么是JS表达式?
>
> A:通俗点说是表达式会产生一个值,并且可以存放在任何一个需要值的地方
>
> Example:
>
> const a = 5 // 定义了一个变量a并赋予初值5
>
> console.log(a) //输出变量a的值:5
>
> 控制台输出：5

**表达式List:**

```jsx
1.一个变量a

2.a+b

3.demo(1) Tips:**若在demo函数中没有定义return 也会返回一个信息:is not define return** 

4.arr.map Tips:**此函数为JS操作数组**

5.function test(){} 
```



> Q:什么是JS语句(代码)？
>
> A:和上述[JS表达式]定义相反,语句不需要产生一个值,并且不能放在需要值的地方
>
> Example:
>
> const a = 10
>
> const answer= if(a){}  //报错,if可以返回值嘛?很显然,这不可能.顾为JS的语句



语句(代码)List:

```jsx
1.if(){}

2.for(){}

3.switch(){case:xxxx}
```



要点二:

完成使用array.map操作元素后,打开控制台会发现报错:

`Warning:Each child in a list should have a unique "key" prop`

翻译为:列表中的元素**没有唯一**的Key.

前面我们知道React有一个机制能快速对原先的Dom和当前即将渲染到页面的Dom进行比较,如果有想同的元素则不会直接代替原Dom，而是将当前Dom新增元素加到原Dom上.那么现在很明显,这个操作是基于Dom中的元素`Key`属性进行比对的.

带入Example快速理解下:

设你先在想在班级里面寻找一个人,如果没有一个唯一的标识,你可以找到ta吗?若你知道想找的人名称那么会找到吗?可能不会,因为有可能会*出现重名的情况*.但如果你靠着身份ID,既一定可以找到,因为身份证ID是有**唯一性**的.React机制就是这样的.

请记住,给你的元素添加唯一标识服的字段名为:`Key`

```html
<ul Key={index}>{the_data}<ul>   
```

例子代码解释:

在列表每一个元素唯一的标识为索引值,这样保证了Key是不会重复的.

----

##  4. <a name='Code'></a>解释实现Code

1.分析实现目标的布局

[]

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/03_Jsx%E5%B0%8F%E7%BB%83%E4%B9%A0/prc/Target_div.png)

观察得出,目标由1个H1标签+列表实现.又因为**React不允许有两个根节点**,顾在外侧套*上一层div*



2.定义一个虚拟Dom，并构建容量布局

```jsx
const data = ['Augular','React','Vue']

const VDOM = (
	<div>
        <h1>前端框架JS列表</h1>
        <ul>
        	{
                /*注意这个地方写的一定是JS的表达式!!!否则报错
                  对数组进行遍历后做一个加工,加上<li>标签
                */
                {
                    data.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            }
        </ul>
    </div>
)
```



## 本教程所有代码

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/03_Jsx%E5%B0%8F%E7%BB%83%E4%B9%A0/prc/Successcode.png)
