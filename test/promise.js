/**
 * 为什么解决回调函数的问题，出现了promsie
 */

 const promise = new Promise(function(resolve, reject) {
    // ... some code
  
    if (true){
      resolve(value);
    } else {
    }
  });

  promise.then((res) => {
    
  })

/**
 * 实现promise
 */
 function MyPromise01(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }
    /**
        (resolve,reject) => {
            if(true){
                resolve()
            }
        } 

        立即执行传入MyPromise构造函数中的函数
        但是这个函数内部的代码是异步的，因此当resolve函数可以执行的时候
        then函数已经执行完毕了，MyPromise01内部callbacks中已经有注册的回调函数了
        因此resolve函数执行的时候，callbacks已经有值了
        而执行每一个通过then注册的函数，都会传递一个value值过去，因此在外部可以拿到这个value值

        而如果这个函数内部的代码是同步的，就会导致直接执行resolve函数
        此时callbacks数组长度是0，resolve函数等于白执行，也就是不会执行通过then方法注册的回调函数都不会执行
    */
    fn(resolve);
}
const p1=new MyPromise01((resolve,reject) => {
    // 异步操作执行完毕
    // 开始执行resolve
    // 此时then函数已经执行完毕，MyPromise01内部callbacks中已经有注册的回调函数了
    if(true){
        resolve()
    }
})
p1.then((res) => {
  console.log(res, 'res')
}).then((res) => {
  console.log(res, 'res2')
})


/**
 * promise是为了解决回调函数存在的问题
 * 那么有哪些问题呢？
 *  1.回调多层嵌套，即回调地狱
 *  2.因为回调函数放在异步任务中，因此当回调函数发生错误的时候无法捕获到
 *      因为当执行回调函数的时候，执行栈已经执行结束，catch代码已经不会执行了
 *  3.并行问题，当回调函数依赖多个异步任务执行的时候，处理起来就会很麻烦
 * 
 * 那么promise是如何解决的呢？
 *  先思考回调函数的出现是为了解决什么问题？
 *      是为了解决当某些程序依赖异步任务的时候，无法在正确的时机执行
 *      因为同步代码的话，直接放在代码后就可以保证按顺序执行
 *      然而异步代码的话，必须思考一种方式来保证按顺序执行
 *      回调函数就是这样一种方式，同时他还支持自定义程序代码
 *  那么promise也要解决这个问题：
 *      1.首先是存在异步任务
 *      2.然后是异步任务结束后要执行固定的程序
 *      3.最后固定的程序允许在外部自定义
 */


/**
 Promise是一个构造函数，传入构造函数的是一个方法
  1.这个方法执行的时候就会执行依赖的异步任务
  2.然后是通过它的实例来注册那些固定的程序


 */
const a = new Promise(() => {
  setTimeout(() => {
      console.log(2);
  }, 1000);
})

// then方法用来注册异步任务结束后要执行的方法
a.then((res) => {
  console.log(res);
})
// 那么1/3都实现了，2怎么实现呢？如何保证按顺序执行呢？
// 既然是注册，那么Promise构造函数内部一定维护着一个回调函数队列
// 开始写Promise构造函数