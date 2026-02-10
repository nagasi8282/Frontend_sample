var student={
    name: "Naga Sai",
    age: 22,
    skills:[],

    greet: function(){
        console.log("Hello", student.name,"Good Morning")
    }
}

student.greet()

console.log(student.skills);


let value={}
value.id=2;
console.log(value);

let value1= new Object();// create
value1.id=10001;
value1.text="new object created";
value1.type="String"
console.log(value1);


student.age=23;
student.skills=['Java','Python'];
console.log(student);


delete value1.type
console.log(value1)


console.log("type" in value1)


console.log(Object.keys(student))

console.log(Object.values(student))

console.log(Object.entries(student))


let index=0
for (let values in student){
     console.log(index,":",values,"-",student[values])
     index ++
}

student.greet()


function address(){
    console.log("I'm", "know",this.skills)
}

let result= address.bind(student);
result()

