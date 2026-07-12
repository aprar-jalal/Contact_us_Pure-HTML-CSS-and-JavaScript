const links = document.querySelectorAll(".subHeader a");
links.forEach(link=>{
    link.addEventListener("click",function(e){
     e.preventDefault();
     links.forEach(item => item.classList.remove("active"));
     this.classList.add("active")
    })
})