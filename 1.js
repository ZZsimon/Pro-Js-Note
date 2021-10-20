// ref:https://segmentfault.com/a/1190000009478377

function MyPromise01(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this
    };

    function resolve(value) {
        setTimeout(() => {
            callbacks.forEach(function (callback) {
                callback(value);
            });   
        },0);
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
        此时callbacks数组长度是0，resolve函数等于白执行，也就是通过then方法注册的回调函数都不会执行
        因此要保证在resolve执行之前，then方法已经注册完所有的回调
    */
    fn(resolve);
}
const p1=new MyPromise01((resolve,reject) => {
    // 异步操作执行完毕
    // 开始执行resolve
    // 此时then函数已经执行完毕，MyPromise01内部callbacks中已经有注册的回调函数了
    // if(true){
        
    // }
    resolve()
    // setTimeout(() => {
    // }, 1000);
})
p1.then((res) => {
  console.log(res, 'res')
}).then((res) => {
  console.log(res, 'res2')
})

setTimeout(() => {
    p1.then(tip => {
        console.log('then3', tip);
    })
});
