# 网页中如何使用js呢

- js诞生目的就是用于处理网页的验证问题，但是如何在网页中使用呢？

- Netscape创造了script标签。
    - 在`<script> </script>`标签中写js代码。
    - 在外部的.js文件中写js代码，并用`<script src='...' />`的scr属性引用js文件
- 浏览器渲染
    - 浏览器内核可以分成两部分：渲染引擎和JS 引擎
    - JS 引擎是独立于渲染引擎存在的。我们的 JS 代码在文档的何处插入，就在何处执行。当 HTML 解析器遇到一个 script 标签时，它会暂停渲染过程，将控制权交给 JS 引擎。JS 引擎对内联的 JS 代码会直接执行，对外部 JS 文件还要先获取到脚本、再进行执行。等 JS 引擎运行完毕，浏览器又会把控制权还给渲染引擎，继续 CSSOM 和 DOM 的构建。 因此与其说是 JS 把 CSS 和 HTML 阻塞了，不如说是 JS 引擎抢走了渲染引擎的控制权。
    - 正常的js代码不管是网络加载还是执行，都会阻塞渲染引擎

- script标签的defer/async属性表现
    - 加载js资源不会阻塞HTML文档解析
    - 执行的时候会阻塞
    - 实际测试发现 defer的执行会阻塞async的加载，因此js脚本加载和执行的顺序可能根据浏览器的不同而有差异，具体在实际中先参照这个理论去做，遇到问题了尽量避免即可。
    - "在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件触发前执行，因此最好只包含一个延迟脚本。" 《JavaScript 高级程序设计（第三版）》

<img src='https://image-static.segmentfault.com/28/4a/284aec5bb7f16b3ef4e7482110c5ddbb_articlex' />


- script标签和img标签类似 都可以做到跨域请求
```
<script src="外部域名的js地址" />
```