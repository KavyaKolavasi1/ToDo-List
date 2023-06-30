// set the following variables using the const declaration
const textBox = document.getElementById("textbox");
const taskList = document.getElementById("taskList");

// create a function for the text-boxes
function inputTasks(){
    // if nothing is input, then message the following
    if(textBox.value ==''){
        alert("Please write something!");
    }
    else{
        // else store li element in li variable
        let li = document.createElement("li");
        // any text added to input field will be added to li
        li.innerHTML = textBox.value;
        // above li will be displayed in the listContainer through append fx
        taskList .appendChild(li);
        // create a span tag
        let span = document.createElement('span');
        // store the span icon (x) in the span tag
        span.innerHTML = "\u00d7";
        // display the span tag in the li
        li.appendChild(span);

    }
    // clear the input field after adding text 
    textBox.value = '';
    // save the data so information will be saved after refreshing
    maintainTask()


}

// function will allow to delete or cross out a tast
taskList .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask()
    }
}, false);

// show the content to be saved in the browser
function maintainTask(){
    localStorage.setItem("data",taskList .innerHTML);
}

//show the content to be saved in the browser
function saveTask(){
    taskList .innerHTML = localStorage.getItem("data");
}

// call function
saveTask();