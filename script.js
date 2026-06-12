function addPost(){

let title=document.getElementById("postTitle").value;
let content=document.getElementById("postContent").value;

if(title==="" || content===""){
alert("Enter title and content");
return;
}

let post=document.createElement("div");

post.className="post";

post.innerHTML=`
<h3>${title}</h3>
<p>${content}</p>

<input type="text" placeholder="Write a comment">
<button onclick="addComment(this)">Comment</button>

<div></div>
`;

document.getElementById("posts").appendChild(post);

document.getElementById("postTitle").value="";
document.getElementById("postContent").value="";
}

function addComment(btn){

let input=btn.previousElementSibling;

let comment=input.value;

if(comment==="") return;

let div=btn.nextElementSibling;

let p=document.createElement("p");

p.textContent="Comment: "+comment;

div.appendChild(p);

input.value="";
}
