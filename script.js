
var head = document.querySelector("#heading-container")
var fixed = document.querySelector("#fixed-image")
head.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
head.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var headings = document.querySelectorAll(".heading")
headings.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


































