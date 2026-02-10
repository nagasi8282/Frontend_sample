let fruits=['Apple','Banana','Grapes','Pear','Orange','Mango'];

let arr=new Array(10,20,30,40,50);

console.log(fruits);
console.log(arr);

console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[3]);

 fruits.unshift('Watermelon');//we use unshit it store in top of the array

console.log(fruits);

fruits.push('Maskmelon');// we use push it store in button of the array
console.log(fruits)

fruits.shift();
fruits.pop();

console.log(fruits)

let result=fruits.slice(1,4);
console.log(result);

let res = arr.splice(0,4);
console.log(res);

arr.splice(2,0,200);

console.log(arr);


for(let values of fruits){
    console.log(values);
}

for(let index in fruits){
    console.log(index,fruits[index])
}

for(let i of arr){
    console.log(i,arr[i])
}


for(let i in arr){
    console.log(i,arr[i])
}


