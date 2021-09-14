import avoBowl from "./assets/images/avoBowl.png"
import linesP from "./assets/images/svg/linesPink.svg"
import linesG from "./assets/images/svg/linesGreen.svg"
import Helper from "../helperFunctions/helpers";

const Hero = (() => {

    const showAvocado = (contentMain) => {

        const displayHeroImg = () => {
            const bowlImg = Helper.makeEl("img", {
                src: avoBowl,
                class: "avo-bowl"
            })
            let main = Helper.makeEl("div", {
                class: "main"
            })
            let bowlCont = Helper.makeEl("div", {
                class: "bowl-container"
            })

            contentMain.appendChild(main)
            main.appendChild(bowlCont)
            bowlCont.appendChild(bowlImg)
        }

        const displayLines = () => {
            const main = document.querySelector(".main")
            const lineContainer = Helper.makeEl("div", {
                class: "line-container"
            })
            const pinkLines = Helper.makeEl("img", {
                src: linesP,
                class: "pink-lines"
            })
            const greenLines = Helper.makeEl("img", {
                src: linesG,
                class: "green-lines"
            })
            lineContainer.appendChild(pinkLines)
            lineContainer.appendChild(greenLines)
            main.appendChild(lineContainer)
        }

        const displayBackDrop = () => {
            const main = document.querySelector(".main")
            const showGreen = () => {
                let green = Helper.makeEl("div", {
                    class: "green-side"
                })
                main.appendChild(green)
            }
            const showPink = () => {
                let pink = Helper.makeEl("div", {
                    class: "pink-side"
                })
                main.appendChild(pink)
            }
            showGreen()
            showPink()
        }

        const showText = () => {
            const pinkSide = () => {
                const pink = document.querySelector(".pink-side")
                let textContainer = Helper.makeEl("div", {
                    class: "pink-text-container"
                })
                textContainer.textContent = "The Woke Millennial"
                pink.appendChild(textContainer)
                let btnContainer = Helper.makeEl("div", {
                    class: "button-container"
                })
                let menuBtn = Helper.makeEl("div", {
                    class: "menu-button",
                    id: "view-menu"
                })
                menuBtn.textContent = "View Menu"
                textContainer.appendChild(btnContainer)
                btnContainer.appendChild(menuBtn)

            }
            const greenSide = () => {
                const green = document.querySelector(".green-side")
                let textContainer = Helper.makeEl("div", {
                    class: "green-text-container"
                })
                textContainer.textContent = "All Avocado, All The Time"
                green.appendChild(textContainer)
            }
            pinkSide()
            greenSide()
        }
        displayHeroImg()
        displayLines()
        displayBackDrop()
        showText()
    }

    return {
        showAvocado
    }
})()

export default Hero


