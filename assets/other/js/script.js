console.log("JS OK")

/*
**
* navigation menu */
const nav = document.querySelector("nav");
const icnspan = document.querySelector(".openInfo span")


let opened = false
const openInfo = () => {
    console.log("clicked")
    if (opened) {
        opened = false
        nav.setAttribute("style", "height:0px; margin-top:0px auto; background: #17182d; border-radius:8px;")
        icnspan.innerHTML = `<i class="fa fa-arrow-down fa-bounce" > </i>`
    }
    else {
        opened = true
        nav.setAttribute("style", "height:auto; margin-top:1.5rem auto; background: #17182d; border-radius:8px;")
        icnspan.innerHTML = `<i class="fa fa-arrow-up fa-bounce" > </i>`
    }
}

// *****************



const menuBtns = document.querySelectorAll(".menu .menuBtn")
const contentTag = document.querySelector(".content");
const home = document.querySelector(".home")
const cv = document.querySelector(".cv")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact")
window.addEventListener("DOMContentLoaded", () => home.classList.remove("hide"))


const AllClassesAdding = (remove) => {
    home.classList.add("hide")
    cv.classList.add("hide")
    portfolio.classList.add("hide")
    contact.classList.add("hide")
    remove.classList.remove("hide")
}

menuBtns.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.id == "homeBtn") AllClassesAdding(home);
        else if (e.target.id == "cvBtn") AllClassesAdding(cv);
        else if (e.target.id == "portfolioBtn") AllClassesAdding(portfolio);
        else if (e.target.id == "contactBtn") AllClassesAdding(contact);
        else AllClassesAdding(home)
    })
})





let testmonial = document.querySelectorAll(".testmonial")
let previus = document.getElementById("previus")
let next = document.getElementById("next")
testmonial.forEach(test => test.style.display = "none")



let counter = 0;
testmonial[counter].style.display = "inherit"


next.addEventListener("click", e => {
    previus.disabled = false
    if (counter !== testmonial.length - 1) {
        counter = counter + 1
        console.log(counter)
        testmonial[counter - 1].style.display = "none"
        testmonial[counter].style.display = "inherit"
    } else {
        e.target.disabled = true
    }
})


previus.addEventListener("click", e => {
    next.disabled = false
    if (counter < 1) {
        e.target.disabled = true
        return
    } else {
        counter = counter - 1
        testmonial[counter].style.display = "inherit"
        testmonial[counter + 1].style.display = "none"
    }
})



const projectHeader = document.querySelectorAll(".project .header");

projectHeader.forEach((header,index)=>{
    const projectContent = header.querySelector(".openInfo")
    header.addEventListener("mouseenter", ()=>{
        console.log("mouse is enter")
        projectContent.setAttribute("style","transform:translateY(0px)")
        // projectHeader.querySelector("img").style.scale = "1.7"
    })
})

projectHeader.forEach((header,index)=>{
    const projectContent = header.querySelector(".openInfo")
    header.addEventListener("mouseleave", ()=>{
        console.log("mouse is leave")
        projectContent.setAttribute("style","transform:translateY(-150px)")
        // projectHeader.querySelector("img").style.scale = "1"
    })
})




const buttons = document.querySelectorAll(".portfolio-button");
const project = document.querySelectorAll(".project");
const projectContaienr = document.querySelector(".projects")

const showProjects = (div) =>{
    console.log("button are working...")
    const id = div.id 
    project.forEach(projec=>{
        if(id == "all"){
            projec.classList.remove("hide")
        }
        else if(projec.getAttribute("data-field") == id){
            projec.classList.remove("hide")
        }
        else{
            projec.classList.add("hide")
        }
    })
}




const formBlock = document.querySelectorAll(".form-block")


const fieldsetSetting = (div) =>{
    const id = div.id
    if(id == "name"){
        formBlock[0].querySelector("legend").classList.remove("hide")
        formBlock[1].querySelector("legend").classList.add("hide")
        formBlock[2].querySelector("legend").classList.add("hide")
    }
    else if (id=="email"){
        formBlock[1].querySelector("legend").classList.remove("hide")
        formBlock[0].querySelector("legend").classList.add("hide")
        formBlock[2].querySelector("legend").classList.add("hide")
    }
    else if (id=="message"){
        formBlock[0].querySelector("legend").classList.add("hide")
        formBlock[1].querySelector("legend").classList.add("hide")
        formBlock[2].querySelector("legend").classList.remove("hide")
    }
    div.onmouseleave = function(d){
        div.querySelector("legend").classList.add("hide")
    }
} 



document.getElementById("form-contact").addEventListener("submit", e=>{
    e.preventDefault();
    document.getElementById("msg").innerText = "Loading"
    setTimeout(() => {
        document.getElementById("msg").innerText = "Your message has been sent sucessfully..."
    }, 1500);
    setTimeout(() => {
        document.getElementById("msg").innerText = ""
    }, 3000);
})