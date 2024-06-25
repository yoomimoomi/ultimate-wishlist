const u1 = document.querySelector("u1"),
input = u1.querySelector("input");

console.log("help!!");

function addTag(e){
    if(e.key == "Enter"){ // 10:34, enter key is different on mac (option + return) and windows.
        console.log("Enter key pressed"); 
        console.log(e.target.value);
    }
}
console.log("help AAA!!");

input.addEventListener("keyup", addTag);
