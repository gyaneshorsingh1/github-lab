const inputBox = document.querySelector("#input-data");
const resultBox = document.querySelector("#result-box");
const ul = document.querySelector("ul");
function addTask(){
    if(inputBox.value === ""){
        alert("Please enter something ");
    }
    else{

        li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveToDB();
}
resultBox.addEventListener("click", function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked");
        saveToDB();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveToDB();
    }
},false)


function saveToDB(){
    localStorage.setItem("data", resultBox.innerHTML);
}
function showData(){
    resultBox.innerHTML= localStorage.getItem("data");

}
showData();