let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () =>{
    if (input.value ===""){
        msg.innerHTML = "Post cannot be blank"
        console.log("failure");
    }else{
        console.log("success");
        msg.innerHTML = ""
        acceptData();
    }
};

let data = {}
let acceptData = () =>{
    data["text"]= input.value;
    console.log(data);
    createPost()
};

let createPost =  () => {
    // posts.innerHTML += `<div><p>${data.text}</p>`
    const newDiv = document.createElement("div");
    const newp = document.createElement("p");
    newp.textContent = data["text"];
    const newspan = document.createElement("span");
    newspan.className = "options";

    const newi_edit = document.createElement("i");
    newi_edit.className = "fas fa-edit";
    newi_edit.setAttribute('onclick', "editPost(this)");
    const newi_trash = document.createElement("i");
    newi_trash.className = "fas fa-trash-alt";
    newi_trash.setAttribute('onclick', "deletePost(this)");

    newDiv.appendChild(newp);
    newspan.appendChild(newi_edit);
    newspan.appendChild(newi_trash);
    newDiv.appendChild(newspan);

    posts.innerHTML += newDiv.outerHTML;
    console.log(newDiv.outerHTML)
    input.value = "";

 
    

}


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove(); 
}
