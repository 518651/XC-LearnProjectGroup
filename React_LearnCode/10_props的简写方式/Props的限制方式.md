# Props的限制方式

## 引入

在09MD中,已完成对Props的批量传递形式

```jsx
const p = {name:'老刘',age:18,sex:'女'}
ReactOM.render(<Person {...p}/>,document.getElenmentById('test3'))
```

**现在我们添加一个需求：每个人的年龄在展示时都要大一岁**

**也就是说:传入的年龄不能修改,但是展示的时需要在原传入的数据中+1岁**

