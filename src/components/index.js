import "../styles/style.css"
import Update from "./updatePage";
import Hero from "./loadHero"
import NavBar from "./nav";


const content = document.getElementById("content")

const initContent = () => {
    // const getNav = () =>
    NavBar.addNavItems()
    Hero.showAvocado(content)
    const menu = document.getElementById("view-menu")
    const contact = document.getElementById("contact-btn")
    menu.addEventListener("click", () => Update.page(1))
    contact.addEventListener("click", () => Update.page(2))
}

window.onload = () => initContent()



