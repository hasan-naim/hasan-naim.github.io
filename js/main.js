// Code for Navigation

const toggleIcon = document.querySelector(".navbar_toggle")
const nav = document.querySelector(".div_items")

let classToggle = () => {
    nav.classList.toggle("nav_show")
}

toggleIcon.addEventListener("click", classToggle);  




// Code for Hide Navigation

const everySectionWithoutHeader = [ document.querySelector("#about"),
                document.querySelector("#home"),
                document.querySelector("#project")
            ];

const navbarLinks = document.querySelectorAll(".navbar_links")

const removeClassFromHeader = () => {
    nav.classList.remove("nav_show")  
    }

everySectionWithoutHeader.forEach((section) => {
    section.addEventListener("click", removeClassFromHeader)
})

navbarLinks.forEach( element => {
    element.addEventListener("click", removeClassFromHeader)
})
