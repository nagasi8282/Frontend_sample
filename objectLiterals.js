// // // function greeting(){
// // //     let name = "Dhathri";
// // //     let greets = "Morning";
// // //     return `Hi ${name} Good ${greets}`
// // // }

// // // console.log(greeting());

// // // let root = document.createElement("div");
// // // document.body.appendChild(root);

// // // let h1 = document.createElement("h1");
// // // h1.innerHTML=
// // // `
// // // Document Object Model
// // // DOM user Interface
// // // `;


// // let style=document.createElement("style");
// // style.innerHTML=`
// // h1{
// // color:green;
// // font-size:20px;
// // }
// // body{
// // background-color:red
// // }
// // `;
// // document.head.appendChild(style)
// // root.appendChild(h1);


// let student={
//     name:"Dhanya",
//     age:Number(21),
//     skills:"java full stack",
// }

// let {name,age} = student
// console.log(name, age);


let arr1 = [1,2,3,4,5,6,7,3,4,2,5,2]
let arr2 = [8,3,2,3,7,8,9,10,3]

let result = [...new Set([...arr1,...arr2])]

console.log(result);
