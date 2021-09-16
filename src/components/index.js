import "../styles/style.css"
import Update from "./updatePage";
import Hero from "./loadHero"

import NavBar from "./nav";

NavBar.addNavItems()

const content = document.getElementById("content")

const loadInitContent = () => {
    Hero.showAvocado(content)

    const menu = document.getElementById("view-menu")
    const contact = document.getElementById("contact-btn")

    menu.addEventListener("click", () => Update.page(1))
    contact.addEventListener("click", () => Update.page(2))
}

window.onload = () => loadInitContent()



