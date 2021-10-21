class MyPromse02 {
    // asyncFun就是传入构造函数的方法
    // 这个方法中会有那些回调函数依赖的异步代码
    constructor(asyncFun) {
        this.list = []
        // asyncFun()

        // 直接执行的话，构造函数无法和异步代码产生联系
        // 因此需要一个桥梁，通过传递一个参数
        // 那么也就是说这个传入的函数有一个固定的参数

        // 传入的时候就变成这样子
        /**
            const a=new Promise((resolve) => {
                setTimeout(() => {
                    console.log(2);

                    // 异步任务执行完了，开始执行传过来的方法
                    // 这样子，异步任务就和Promise构造函数连接了
                    // 构造函数知道当middleFun函数执行的时候，异步任务一定已经执行完了
                    // 可以开始执行list中保存的回调函数了
                    // 也就是说middleFun函数中来执行list中保存的回调函数
                    resolve()

                }, 1000);
            }) 
         */
        asyncFun(this.middleFun)
    }

    middleFun = (res) => {
        setTimeout(() => {
            this.list.forEach(callback => callback(res))
        }, 0);
    }

    then = (callback) => {
        this.list.push(callback)
        return this
    }
}

const a = new MyPromse02((resolve) => {
    setTimeout(() => {
        console.log(2);
        const res = [1, 2, 3]
        resolve(res)
    }, 1000);
})

// then方法用来注册异步任务结束后要执行的方法
a.then((res) => {
    console.log(res, 'res');
})
/**
      这样子就非常清晰，来处理异步任务的顺序执行
          1.异步任务传入构造函数
          2.异步任务结束后需要执行的程序通过then方法来注册
 */

// 但是上面的Promise只能注册一个回调函数，当有多个回调函数需要注册的时候该怎么办呢？
/**
    a.then((res) => {
        console.log(res,'res');
    }).then((res) => {
        console.log(res,'res2');
    }) 

    会直接报错，因为then方法什么都没有返回

    */


// 很简单，then方法返回一个Promise实例就行啦
// this就表示promise实例，因此return this就行了
/**
    then=(callback)=>{
        this.list.push(callback)
        return this
    }
 */
new MyPromse02((resolve) => {
    setTimeout(() => {
        console.log(2);
        const res = [1, 2, 3]
        console.log('------------then注册两个----------');
        resolve(res)
    }, 1000);
}).then((res) => {
    console.log(res, 'res');
}).then((res) => {
    console.log(res, 'res2');
})

/**
    再来回顾一下回调函数的缺点：
        *  1.回调多层嵌套，即回调地狱
        *  2.因为回调函数放在异步任务中，因此当回调函数发生错误的时候无法捕获到
        *      因为当执行回调函数的时候，执行栈已经执行结束，catch代码已经不会执行了
        *  3.并行问题，当回调函数依赖多个异步任务执行的时候，处理起来就会很麻烦

    1.现在只要按照先后顺序通过then注册回调函数，就可以直观地理解异步代码执行结束后的代码逻辑
    2.错误处理后面再说。
    3.并行问题后面再说
    还剩下2/3没解决
 */

    /**
        现在的构造函数能保证回调函数在异步程序执行完再执行是因为
            1.resolve函数执行的时候，构造函数中的数组已经注册进了回调函数
            2.如果resolve函数执行的时候，构造函数中的数组还是空的，就会出问题了
            3.因此要保证resolve函数执行的时候，回调函数已经注册完了
                因此要让resolve函数异步执行
     
     */

