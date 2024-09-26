function addTask(){
        let container = document.getElementById("tasks");
    
        let input = document.getElementById("userInput").value;
        // taskText.innerHTML = input;  
        if (input.trim() === "") {
            alert("Please enter a valid task.");
            return;
            }
            console.log("useinput is ",input);
            
        let taskBox = document.createElement('div');
            taskBox.className = "tasklist";
            
        let taskText = document.createElement('ul');
        // taskText.innerHTML = input;  
        // taskText.id = "task";// my line
        
        let taskTextli = document.createElement('li');
        taskTextli.innerHTML = input;
        taskText.appendChild(taskTextli);

        
        
        
        // let task = document.getElementById("task");// my lines
        // task.innerHTML=input
        
        let completeButton = document.createElement("button");
        completeButton.className ="btn"; 
        completeButton.innerHTML= "Complete"

        let deleteButton = document.createElement("button");
        deleteButton.className ="btn"; 
        deleteButton.innerHTML = "Delete"

    taskBox.appendChild(taskText);
    taskText.appendChild(completeButton);
    taskText.appendChild(deleteButton);

    container.appendChild(taskBox);

    document.getElementById("userInput").value = "";

    completeButton.addEventListener("click",function(){
        taskText.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener("click",function(){
        container.removeChild(taskBox);
    });
    
}

// let taskAddingButton = 
document.getElementById("submitButton").addEventListener("click",addTask);
// taskAddingButton.addEventListener("click",addTask());
        // let input = document.getElementById("userInput").value;
        // taskText.innerHTML = input;
        
        
        
        
        // let task = document.getElementById("task");
        // task.innerHTML=input;
        




    // document.getElementById("submitButton").addEventListener("click",addTask());
