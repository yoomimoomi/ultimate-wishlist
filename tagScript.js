// const u1 = document.querySelector("u1"),
// input = u1.querySelector("input"),
// countNumb = document.querySelector(".details span");

// let maxTags = 10,
// tags = [];

// countTag(); // to remove _ from "_ tags are remaining"

// function countTag(){
//     input.focus();
//     countNumb.innerText = maxTags - tags.length; // subtracting max value with tags length
// };

// function createTag(){
//     //removing all li tags before adding so there will be no duplicate tags vv
//     u1.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag= `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
//         u1.insertAdjacentHTML("afterbegin", liTag); // inserting or adding li inside u1 tag
//     });
//     countTag();
//     console.log(tags);
// }

// function remove(element, tag){
//     let index = tags.indexOf(tag); // removing tag index
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)] // removing or excluding selected tag from an array
//     element.parentElement.remove(); // removing li of removed tag, removes tag from box
//     countTag();
//     console.log(tags);
// };

// function addTag(e){
//     if(e.key == "Enter"){ // 10:34, enter key is different on mac (option + return) and windows.
//         let tag = e.target.value.replace(/\s+/g,' '); //removing unwanted spaces from user tag
//         if(tag.length > 1 && !tags.includes(tag)){ // if tag length is greater than 1 and the tag doesn't exist already
//             if(tags.length < 10){ // if tags length is less than 10 then only add tag, if greater than 10 don't add tag
//                 tag.split(',').forEach(tag =>{ // splitting each tag with comma (,)
//                     tags.push(tag); // adding each tag inside array
//                     createTag();
//                 });
//             }
//         }
//         e.target.value = "";
//     }
// }


// input.addEventListener("keyup", addTag);

/* Makes the "Remove All" button functional? 20:00 

const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0; // making array empty
    u1.querySelectorAll("li").forEach(li => li.remove()); // removing all li tags
    countTag();
});

This is in tutorial but the "Remove All" button
already makes the array empty and the countTag is correct...?? 
Also it causes a problem where you can't type out more than 1 tag and the tags remaining is 
stuck at 9. */