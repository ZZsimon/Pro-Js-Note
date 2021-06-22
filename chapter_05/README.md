# 引用类型

#### ECMAScript中的引用类型其实是一种数据结构，用于将数据和功能组织在一起
- 变量的作用是保存数据，但是数据有些简单，有些复杂。需要分门别类才能更高效率地处理。
- ECMAScript将数据类型分为【基本类型】和【基本类型】两种
- 【基本类型】用来保存简单的数据段，【引用类型】则保存复杂的数据
    - 【基本类型】包括Number、String、Boolean等
    - 【引用类型】只有一种：Object

- 但是因为复杂数据多种多样，仅仅用Object这个类型来保存复杂的数据还是不够用，因此需要给Object这个引用类型细分，细分出不同的引用类型来表示不同的复杂数据
- ECMAScript中默认会有一些不同的引用类型：Array、Date、Math、Function等等
- 而不管是什么类型的引用类型，它们的实例都被称为对象。如果理解了它们都属于Object这个引用类型，就好理解了。

#### 1.Object
- 1.1 [Object](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/object_01/object.html)

#### 2.Array
- 2.1 [length特性、检测数组、转换方法](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/array_02/array_01.html)
- 2.2 [栈方法、队列方法、重排序方法、操作方法](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/array_02/array_02.html)
- 2.3 [位置方法、迭代方法、归并方法](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/array_02/array_03.html)

#### 3.Date
- 3.1 [Date](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/date_03/date.html)

#### 4.Function
- 4.1 [没有重载、函数声明和函数表达式](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/function_04/function_01.html)
- 4.2 [函数内部的属性 (arguments、this)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/function_04/function_02.html)
- 4.3 [函数其他属性和方法 (prototype、call、apply、bind)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/function_04/function_03.html)
#### 5.包装类型
- 5.1 [Boolean、Number、String](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/package_05/package.html)


#### 5.内置对象
- 5.1 [Global、Math](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_05/builtInObject_06/builtInObject.html)
