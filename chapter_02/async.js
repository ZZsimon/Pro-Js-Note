let count=0
for (let index = 0; index < 300000000; index++) {
    count+=index
}

console.log('async',count);
