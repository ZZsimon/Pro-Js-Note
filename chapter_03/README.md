# javaScript基本概念

### 1. js中的一切都区分大小写，包括变量名、函数名、操作符、关键字等。

### 2. ECMA-262定义了一些关键字和保留字
- 关键字可用于表示控制语句的开始或者结束，或者执行特定操作，例如【break】、【typeof】、【new】、【return】等
- 保留字表示目前在这门语言还有没有任何特定用途。但将来可能被用作关键字，例如【export】、【static】、【super】等
### 3. 标识符指变量、函数名、函数的行参名、属性名
- 标识符要求以一个字母、下划线、美元符号开头（例如：myCar、_fetchData、$1）
- 不要用关键字、保留字、null、true、false、undefined来表示标识符
- [标识符语法](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/grammar_01/grammer.html)

### 4. 数据类型详解
- [undefined](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_undefined_01.html)
- [null](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_null_02.html)
- [布尔类型(boolean)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_boolean_03.html)
- [数字类型(number)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_number_04.html)
- [字符串(string)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_string_05.html)
- [对象(object)](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/dataType_02/dataType_object_06.html)

#### 5. 操作符：用于操作数据，例如加法、减法、大于、相等、小于等。如果是对象，操作符一般都会调用对象的valueOf或者toString方法获取可以操作的值。
- [一元操作符、布尔操作符](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/operator_03/operator_01.html)
- [运算操作符（加减乘除余）、关系操作符、相等操作符、条件操作符、赋值操作符、逗号操作符](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/operator_03/operator_02.html)
- [语句、函数](https://github.com/ZZsimon/Pro-Js-Note/blob/master/chapter_03/statement_04/statement.html)
    - for循环和for-in语句中的变量可以在循环当前在的作用域中访问到
    - switch比较的时候是进行全等比较
    - 函数中的行参只是为了提供便利，事实上不定义也无所谓，因为函数只会从arguments中去获取传入的参数