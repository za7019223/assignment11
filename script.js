let input = document.getElementById("input");
let addbtn = document.getElementById("add-btn");
let todolist = document.getElementById("todolist");


addbtn.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = input.value;
    todolist.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todolist.removeChild(paragraph);
    })

})
