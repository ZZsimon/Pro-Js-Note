let count2=0

for (let index = 0; index < 300000000; index++) {
    count2+=index
}

console.log('defer',count2);
