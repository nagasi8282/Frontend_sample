let root = document.getElementById("root");


let app = document.createElement("div");
app.id = "app";
root.appendChild(app);


let h1 = document.createElement("h1");
h1.innerText = "Todo Application";
h1.className = "todo-heading";
app.appendChild(h1);


let inputBox = document.createElement("div");
inputBox.className = "inputbox";

let input = document.createElement("input");
input.className = "input";
input.placeholder = "Enter your task";

let button = document.createElement("button");
button.className = "button";
button.innerText = "➕";

inputBox.append(input, button);
app.appendChild(inputBox);


let ul = document.createElement("ul");
app.appendChild(ul);


button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter task");
        return;
    }

    let todoObj = {
        text: input.value,
        completed: false
    };

    createTodo(todoObj);
    input.value = "";
});


function createTodo(todo) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = todo.text;

    let actions = document.createElement("div");

    let done = document.createElement("button");
    done.innerText = "✅";
    

    let edit = document.createElement("button");
    edit.innerText = "📝";
   

    let del = document.createElement("button");
    del.innerText = "❌";
    

    
    done.addEventListener("click", () => {
        span.style.textDecoration = "line-through";

    });

    
    edit.addEventListener("click", () => {
        let newText = prompt("Edit task", span.innerText);
        if (newText && newText.trim() !== "") {
            span.innerText = newText;
        }
    });

    
    del.addEventListener("click", () => {
        li.remove();
    });

    actions.append(done);
    actions.append(edit);
    actions.append(del);
    li.append(span, actions);
    ul.appendChild(li);
}
