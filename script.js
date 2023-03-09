//your code here



document.getElementById('addTodoBtn').addEventListener('click',
			()=> {
console.log("welcome");
let input = document.getElementById("newTodoInput");
const node = document.createElement("li");
document.getElementById('todoList').appendChild(node).innerText=input.value;
				input.value = "";
				
});