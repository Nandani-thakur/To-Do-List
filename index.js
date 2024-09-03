const input_box=document.querySelector("#input_box");
const list_container=document.querySelector(".list_container");

function addTask(){
    if(input_box.value ===''){
        alert('Please enter a task');
    }
    else{
        //create list to add todo
        const li=document.createElement('li');
        li.innerHTML=input_box.value;
        //use checkbox for list check is todo complete 
        const check=document.createElement('input');
        check.type="checkbox";
        li.prepend(check);
        list_container.appendChild(li);
        //create new element for cancel/delete todo 
        let span=document.createElement('img');
        span.src='https://img.icons8.com/?size=20&id=82764&format=png&color=000000';
        li.appendChild(span);
    }
    input_box.value='';
    saveData();
}
list_container.addEventListener("click",(e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName=='IMG'){
        e.target.parentElement.remove();
        e.stopPropagation();
        saveData()
    }
},false);
 function saveData(){
    localStorage.setItem("datas",list_container.innerHTML);
    
 }

 function saveTask(){
    list_container.innerHTML=localStorage.getItem("datas");
 }

 saveTask();