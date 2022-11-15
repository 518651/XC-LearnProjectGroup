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
                    data.map(item => {
                        return <li>{item}</li>
                    })
                }
            }
        </ul>
    </div>
)
```



## 本教程所有代码

![](https://github.com/518651/XC-LearnProjectGroup/blob/main/React_LearnCode/03_Jsx%E5%B0%8F%E7%BB%83%E4%B9%A0/prc/Successcode.png)
