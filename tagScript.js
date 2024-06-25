const u1 = document.querySelector("u1"),
input = u1.querySelector("input");

console.log("help!!");

function addTag(e){
    if(e.key == "Enter"){ // 10:34, doesn't print out on console
        console.log("Enter key pressed"); 
        //enter key is different on mac and windows?? when changing e.key to shift it works...
        // https://discussions.apple.com/thread/7415318?sortBy=best
        console.log(e.target.value);
    }
}
console.log("help AAA!!");

input.addEventListener("keyup", addTag);
