import Help from "../helpers/helpers";
import avo1 from "./assets/avocados/avocados-01.png";
import avo2 from "./assets/avocados/avocados-02.png";
import avo3 from "./assets/avocados/avocados-03.png";
import avo4 from "./assets/avocados/avocados-04.png";
import avo5 from "./assets/avocados/avocados-05.png";
import avo6 from "./assets/avocados/avocados-06.png";

const Menu = (() => {
    const showMenu = (content) => {
        const background = () => {
            let backDiv = Help.makeEl("div", {
                class: "menu-container"
            })
            content.appendChild(backDiv)
        }
        background()
        const menuContent = document.querySelector(".menu-container")

        const addTitle = () => {
            let titleCont = Help.makeEl("div", {
                class: "title-container"
            })
            let title = Help.makeEl("div", {
                class: "menu-title"
            }, "Our Menu")
            titleCont.appendChild(title)
            menuContent.appendChild(titleCont)

            const buildMenu = () => {
                const menu = Help.makeEl("div", {
                    class: "menu-background"
                })
                menuContent.appendChild(menu)
            }
            buildMenu()
        }
        addTitle()
        const populateMenu = () => {
            const avoFactory = (name, desc, loc) => {
                return {name, desc, loc}
            }

            let one = avoFactory("Original Avocado Toast", "Simply the best Avocado Toast one can have. We combine beautiful, artisan avocados with locally sourced bread. Providing the pinnacle of Avocado Toast experiences ", avo1)
            let two = avoFactory("Avocado Charcuterie", "Avocados, but smaller. No more One-Bite-Brownie. At The Woke Millennial you can have what may be the worlds smallest Avocado Toast spread.", avo2)
            let three = avoFactory("Avocados and Seeds", "Avocados, but with seeds. Inspired by the thousands who throw their avocados out in the compost bin, only to have them eaten by Squirrels and Racoons alike. This dish takes a contemporary squirrel food and combines it with our fan favourite, the avocado. ", avo3)
            let four = avoFactory("Avocados and Croutons?", "Like Avocados, but with Croutons. It could also be chicken, I can't remember. One can only look at Avocado Stock Photography for so long.", avo4)
            let five = avoFactory("Avocado Toast", "Like the first one, but prettier. This dish includes a $5 surcharge for how lit this is going to look on the gram.", avo5)
            let six = avoFactory("Just a lot of Avocados", "The number of avocados shown here has been scientifically proven to be more than any human can eat - at least before they begin to go bad.", avo6)

            let items = []
            let menuBoard = document.querySelector(".menu-background")
            items.push(one, two, three, four, five, six)

            const makeAvo = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    let avocado = Help.makeEl("div", {
                        class: "menu-item"
                    })
                    let title = Help.makeEl("p", {
                        class: "menu-item-title"
                    })
                    title.textContent = arr[i].name
                    let description = Help.makeEl("p", {
                        class: "description"
                    })
                    description.textContent = arr[i].desc
                    let avoImg = Help.makeEl("img", {
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