const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear()

// nav-links
const btnToggle = document.getElementById("nav-toggle")
const navLinks = document.getElementById("nav-links")
btnToggle.addEventListener("click",function(){
        navLinks.classList.toggle("show-links")
})

// smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link")
const navHeader = document.querySelector(".nav-header")

scrollLinks.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        navLinks.classList.remove("show-links")
        // console.log(e.target.getAttribute("href").slice(1));
        const id = e.target.getAttribute("href").slice(1) 
        const element = document.getElementById(id)
        const navHegiht = navHeader.getBoundingClientRect().height
        // const containerHeight = navLinks.getBoundingClientRect().height
        // console.log(element);
        // topset
        let position = element.offsetTop - navHegiht

        window.scrollTo({
            top:position,
            left:0,
            behavior:"smooth"
        })
            
        
    })
})