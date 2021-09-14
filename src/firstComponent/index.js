import "./styles/style.css"
import Hero from "./loadHero"
import Update from "./updatePage";

const content = document.getElementById("content")

const loadInitContent = () => {
    Hero.showAvocado(content)

    const menu = document.getElementById("view-menu")
    menu.addEventListener("click", () => Update.page(1))
}

window.onload = () => loadInitContent()



