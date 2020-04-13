# JavaScript简介

#### 1.js诞生的目的是用来处理一些表单的验证，避免一个简单的输入验证也需要通过发请求到服务端才能验证，这对于在发送一个网络请求等待响应就要花几分钟的年代是非常痛苦的。

#### 2.网景的LiveScript 改名为 JavaScript  为了搭上媒体热炒的Java

#### 3.微软也推出了 JScript，导致市面上有两个不同版本的JavaScript

#### 4.于是欧洲计算机制造商协会（ECMA）下的39号技术委员会TC39创造了ECMA-262：一种名为ECMAScript的新脚本语言标准。

<br />

#### 5.网景和微软的浏览器中各自都实现了DHTML（Dynamic HTML），虽然这个东西很好，利用它可以访问和改变网页结构，但是导致网页开发者需要为不同的浏览器编写不同的代码

#### 6.于是万维网联盟（W3C）创造了DOM标准：针对XML但经过扩展可用于HTML的API，同样是用于访问和改变网页结构
- 6.1 DOM核心（DOM Core）规定了如何映射基于XML的文档结构，以方便地访问和操作文档
- 6.2 DOM HTML模块是在DOM核心基础上添加了一些针对HMTL的对象和方法

#### 7.这就可以让不同浏览器厂商都基于这个标准去实现浏览器中的DOM，以方便js通过这些DOM接口和浏览器进行交互。
- 7.1 注意：浏览器中的DOM是基于ECMAScript的核心类型和语法实现的一组API，目的就是实现针对浏览器的操作，只不过它在实现的时候遵循了W3C的DOM标准
-  7.2 所以，也会有其他DOM出现，并不单单只有基于ECMAScript实现的DOM，例如SVG就实现了针对自己的一套DOM标准，也就是会有一组新的DOM的API用于SVG。这就像有一套针对HTML的DOM API用于HTML

<br />

#### 8.JavaScript这门脚本语言遵循了ECMAScript，同时这个脚本语言还包括一些其他的内容
- 8.1 JavaScript （以ECMAScript为标准设计的一门脚本语言）
- 8.2 DOM （基于ECMAScript语法，以W3C的DOM为标准设计的一组用于用于HTML应用程序的API）
- 8.3 BOM

gggggdddd
