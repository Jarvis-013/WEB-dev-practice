var numberofdrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrum;i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(){
    alert("i got clicked");
});}
