import Helper from "../helperFunctions/helpers";

const Menu = (() => {
    const showMenu = (content) => {
        const background = () => {
            let backDiv = Helper.makeEl("div", {
                class: "menu-container"
            })
            return content.appendChild(backDiv)
        }
        background()
        const menuContent = document.querySelector(".menu-container")
        const addTitle = () => {
            let titleCont = Helper.makeEl("div", {
                class: "title-container"
            })
            let title = Helper.makeEl("div", {
                class: "menu-title"
            })
            title.textContent = "Our Menu"
            titleCont.appendChild(title)
            menuContent.appendChild(titleCont)

            const buildMenu = () => {
                const menu = Helper.makeEl("div", {
                    class: "menu-background"
                })
                menuContent.appendChild(menu)
            }
            buildMenu()
        }

        addTitle()
    }
    return {
        showMenu

    }
})()

export default Menu