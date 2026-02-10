 let element = document.getElementById('element');
        element.innerHTML = '<h2>Welcome</h2>';
        element.style.color = "red";
        element.style.backgroundColor = 'black';
        element.style.fontSize = '20px';
        element.style.fontFamily = 'Arial, Helvetica, sans-serif';

        let desc = document.getElementsByClassName('desc');
        desc[0].innerText = 'Elements';
        desc[0].style.backgroundColor = 'yellow';
        desc[0].style.color = 'black';

        
        let button = document.getElementsByTagName('button');
        button[0].innerText = 'Click here';
        button[0].style.color = 'green';
        button[0].style.height = '50px';
        button[0].style.width = '120px';

        
        let container = document.getElementsByClassName('container');
        container[0].style.backgroundColor = 'blue';
        container[0].style.color = 'white';
        container[0].style.height = '200px';
        container[0].style.width = '300px';
        container[0].style.padding = '10px';
        

        let item_1=document.querySelector('.item-1');
        item_1.innerText='Pizza';

        let item_2=document.querySelector('#item-2');
        item_2.innerText='Biryani';

        let item_3=document.querySelector('#item-3');
        item_3.innerText='Burger';

      let username=document.getElementById("username");
      let value=username.getAttribute("type");
     // let value2=username.setAttribute("type", "password");
      //username.ariaPlaceholder="Enter password";
      username.style.padding="15px";
      username.style.backgroundColor="green";
      username.style.color="white";
      username.style.borderColor='pink';
      //console.log(username.removeAttribute("Placeholder"))
      console.log(value);


let root=document.getElementById("root");

let app=document.createElement("div");
app.className="box";
root.appendChild(app);
let description = document.createElement("p");
description.innerText="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country since 2023; and, since its independence in 1947, the world's most populous democracy";

app.appendChild(description);



let storage = localStorage.setItem("name", "Nagasai");
let getValue=localStorage.getItem("name");
console.log(getValue);



