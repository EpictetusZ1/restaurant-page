import Help from "../helpers/helpers";
import Update from "./updatePage";


const NavBar = (() =>{
    const nav = document.getElementById("nav")

    const addNavItems = () => {
        let homeBtn = Help.makeEl("div", {
            class: "nav-item",
            id: "home"
        }, "Home")
        nav.appendChild(homeBtn)
        homeBtn.addEventListener("click", () => Update.page(3))

        let contactBtn = Help.makeEl("div", {
            class: "nav-item",
            id: "contact"
        }, "Contact")
        nav.appendChild(contactBtn)
        contactBtn.addEventListener("click", () => Update.page(2))

        let menu = Help.makeEl("div", {
            class: "nav-item",
            id: "menu"
        }, "Menu")
        nav.appendChild(menu)
        menu.addEventListener("click", () => Update.page(1))
    }

    return {
        addNavItems
    }
})()

export default NavBar