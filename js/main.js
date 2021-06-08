// Code for Navigation

const toggleIcon = document.querySelector(".navbar_toggle")
const nav = document.querySelector(".div_items")

let classToggle = () => {
    nav.classList.toggle("nav_show")
}

toggleIcon.addEventListener("click", classToggle);  




// Code for Hide Navigation

const bodyWithoutHeader = [
                document.querySelector("#home"),
                document.querySelector("#about"),
                document.querySelector("#project"),
                document.querySelector("footer")
            ];

const navbarLinks = document.querySelectorAll(".navbar_links")


// Remove Function
const removeClassFromHeader = () => {
    nav.classList.remove("nav_show")
    }

bodyWithoutHeader.forEach( section => {
    section.addEventListener("click", removeClassFromHeader)
})

navbarLinks.forEach( element => {
    element.addEventListener("click", removeClassFromHeader)
})




// Code for About Me in details


const about_me_hide_icon = document.querySelector(".about_me_icon")

const about_me_in_details_section = document.querySelector(".about_me_in_details")

const button_to_show_about_me = document.querySelector(".read_in_details")

function add_display_hide_class(){
    about_me_in_details_section.classList.add("display_hide")
    bodyWithoutHeader.forEach( section => {
        section.classList.remove("display_hide")
    })
}
function remove_display_hide_class(){
    about_me_in_details_section.classList.remove("display_hide")
    bodyWithoutHeader.forEach( section => {
        section.classList.add("display_hide")
    })
}

button_to_show_about_me.addEventListener("click", remove_display_hide_class)

about_me_hide_icon.addEventListener("click", add_display_hide_class)

// hide about me details if I click header links

navbarLinks.forEach( element => {
    element.addEventListener("click", add_display_hide_class)
})


// Code For Preloader 


const preloader = document.querySelector(".preloader")
const body = document.querySelector("body")
const everySectionWithoutPreloader = [
                document.querySelector("header"),
                document.querySelector("#home"),
                document.querySelector("#about"),
                document.querySelector("#project"),
                document.querySelector("footer")
]
// Everything hided when page is not loaded yet
everySectionWithoutPreloader.forEach(section => {
    section.classList.add("display_hide")
})


function hide_preloaderDiv(){
    setTimeout(() => {

        // add display:none to the preloader div
        preloader.classList.add("display_hide")
        // everysection have to show when page is ready
        everySectionWithoutPreloader.forEach(section => {
                section.classList.remove("display_hide")
        })
    }, 1000);
}



window.addEventListener("load", hide_preloaderDiv)






