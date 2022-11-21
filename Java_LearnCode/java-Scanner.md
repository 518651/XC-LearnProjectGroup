第一步:`在有效代码的第一行`，通过import导入Scanner类

```java
import java.util.Scanner;
```

第二步：通过new关键字实例化一个Scanner对象

```java
Scanner input=new Scanner(System.in);
```

-->唯一可变的就是**`input`**t变量名！

第三步：通过Scanner对象来调用Scanner类中的方法，用于获取

用户在控制台输入的内容

获取想过数据类型的数据

在下列关键字中next后的就是你要定义的类型，只不过你所要将next后面类型的首字母改成大写的

```java
//整数型
byte a=input.nextByte();
//获取用户在控制台输入的内容，返回数据类型为byta类型！
short b=input.nextShort();
//获取用户在控制台输入的内容，返回数据类型为short类型！
int c=input.nxtInt();
//获取用户在控制台输入的内容，返回数据类型为ing类型！
long d=input.nxtLong();
//获取用户在控制台输入的内容，返回数据类型为Long类型！
```

```java
//小数型
float e=input.nxtFloat();
//获取用户在控制台输入的内容，返回数据类型为float类型！
double f=input.nxtDouble();
//获取用户在控制台输入的内容，返回数据类型为double类型！
```

```java
//字符型
char g=input.nxtChar();
//获取用户在控制台输入的内容，返回数据类型为char类型！
```

-->当用户输入内容并敲回车是，获取第一个空格之前的内容！

获取引用数据类型的数据

```java
String h=input.next();
//获取用户在控制台输入的内容，返回数据类型为String类型！
```

-->当用户输入内容并桥回车是，获取第一个空格之前的内容！

```java
String i=input.nextLine();
//获取与用户在控制台输入的内容，返回数据类型为String类型；
```

-->当用户输入内容并敲回车是，获取一整行的内容！