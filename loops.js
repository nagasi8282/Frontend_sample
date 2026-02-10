// // loop: until the condition is satisfied the loop will be iterated.

// // for: initialization ; condition next increment; decrement.
// // while: first initialise, then condition after increment /decrement.
// // do while: first intialise and increment/decrement and then condition in while.
// // for each: to iterate on every value. 
// // for of: 
// // for in:

// // nested loop: a loop in multiple loops is called nested loops.

// // loop control statements: to control loop - break, continue and return.

// for(i=1;i<=5;i++){
//     console.log(i);
// }

// let x=5;
// while(x<=1){
//     console.log(x)
//     x++
// }

// for(a=1;a<=5;a++){
//     console.log("")
//     for(b=1;j<=a;j++){

//     }
// }

// for(i=1;i<=4;i++){
//     console.log("outer loop: ",i)
//     for(j=1;j<=2;j++){
//         console.log("Inner loop: ",j)
//         for(k=1;k<=2;k++){
//             console.log("inner loop2: ",k)
//         }
//     }
// }


// for(i=1;i<=4;i++){
//     let row=""
//     for(j=3;j>=i;j--){
//         row+="* "
//     }
//     console.log(row);
// }

let row=""
for(var i=1;i<=10;i++){
    row+= i+" "
}
console.log(row)
