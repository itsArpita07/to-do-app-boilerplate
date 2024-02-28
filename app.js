let listOfActivities = [];
let input = document.getElementById("input");
let todolist = document.getElementById("todolist");

document.getElementById("button").addEventListener("click", clickButton);

function clickButton()
 {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}

function showList() 
{
  todolist.innerHTML = "";

  listOfActivities.forEach(function (n, i) 
  {
    todolist.innerHTML +=
      `<li>${n}<a onclick='editItem(${i})'>Edit</a><a onclick='deleteItem(${i})'>&times | </a></li>`;
  });
}

function deleteItem(i) 
{
  listOfActivities.splice(i, 1);
  showList();
}

function editItem(i) 
{
  let newValue = prompt("Please insert your new value");
  if (newValue !== null)
   {
    listOfActivities.splice(i, 1, newValue);
    showList();
  }
}
