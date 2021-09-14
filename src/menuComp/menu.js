import Helper from "../helperFunctions/helpers";
import avo1 from "./assets/avocados/avocados-01.png"
import avo2 from "./assets/avocados/avocados-02.png"
import avo3 from "./assets/avocados/avocados-03.png"
import avo4 from "./assets/avocados/avocados-04.png"
import avo5 from "./assets/avocados/avocados-05.png"
import avo6 from "./assets/avocados/avocados-06.png"

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
        const populateMenu = () => {
            let items = []
            let menuBoard = document.querySelector(".menu-background")
            const avoFactory = (name, desc, loc) => {
                return {name, desc, loc}
            }
            let one = avoFactory("Original Avocado Toast", "Simply the best Toast one can have. We combine beautiful, artisan, avocados with locally sourced bread. Providing the pinnacle of Avocado Toast experiences ", avo1)
            let two = avoFactory("Avocado Charcuterie", "Avocados, but smaller. No more One-Bite-Brownie. At The Woke Millennial you can have the some of the worlds smallest Avocado Toast.", avo2)
            let three = avoFactory("Avocados and Seeds", "Avocados, but with seeds. Inspired by the thousands who throw avocados out in their compost bin, only to have them eaten by Squirrels and Racoons alike. This dish takes a contemporary squirrel food and combines it with our fan favourite, the avocado. ", avo3)
            let four = avoFactory("Avocados and Croutons?", "Like Avocados, but with Croutons. It could also be chicken, I can't remember. One can only look at stock avocado photos for so long.", avo4)
            let five = avoFactory("Avocado Toast", "Like the first one, but prettier. This dish includes a $5 surcharge for how lit this is going to look on the gram.", avo5)
            let six = avoFactory("Just a lot of Avocados", "The number of avocados shown here has been scientifically proven to be more than any human can eat - at least before they begin to go bad.", avo6)

            items.push(one, two, three, four, five, six)

            const makeAvo = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    let avocado = Helper.makeEl("div", {
                        class: "menu-item"
                    })
                    let title = Helper.makeEl("p", {
                        class: "menu-item-title"
                    })
                    title.textContent = arr[i].name
                    let description = Helper.makeEl("p", {
                        class: "description"
                    })
                    description.textContent = arr[i].desc
                    let avoImg = Helper.makeEl("img", {
                        src: `${arr[i].loc}`
                    })
                    // Menu Element
                    menuBoard.appendChild(avocado)

                    avocado.appendChild(avoImg)

                    avocado.appendChild(title)
                    avocado.appendChild(description)
                }
            }
            makeAvo(items)
        }

       return {
            populateMenu
       }
    }
    return {
        showMenu

    }
})()

export default Menu