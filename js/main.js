const toggleIcon = document.querySelector(".navbar_toggle")

let classToggle = () => {
    const navs = document.querySelector(".div_items")
    navs.classList.toggle("nav_show")
}

toggleIcon.addEventListener("click", classToggle);                                                                                                          