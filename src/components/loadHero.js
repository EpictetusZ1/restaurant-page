import avoBowl from "./assets/images/avoBowl.png"
import linesP from "./assets/images/svg/linesPink.svg"
import linesG from "./assets/images/svg/linesGreen.svg"
import Help from "../helpers/helpers";

const Hero = (() => {

    const showAvocado = (contentMain) => {

        const displayHeroImg = () => {
            const bowlImg = Help.makeEl("img", {
                src: avoBowl,
                class: "avo-bowl"
            })
            let main = Help.makeEl("div", {
                class: "main"
            })
            let bowlCont = Help.makeEl("div", {
                class: "bowl-container"
            })

            contentMain.appendChild(main)
            main.appendChild(bowlCont)
            bowlCont.appendChild(bowlImg)
        }

        const displayLines = () => {
            const main = document.querySelector(".main")
            const lineContainer = Help.makeEl("div", {
                class: "line-container"
            })
            const pinkLines = Help.makeEl("img", {
                src: linesP,
                class: "pink-lines"
            })
            const greenLines = Help.makeEl("img", {
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
                let green = Help.makeEl("div", {
                    class: "green-side"
                })
                main.appendChild(green)
            }
            const showPink = () => {
                let pink = Help.makeEl("div", {
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
                let textContainer = Help.makeEl("div", {
                    class: "pink-text-container"
                })
                textContainer.textContent = "The Woke Millennial"
                pink.appendChild(textContainer)
                let btnContainer = Help.makeEl("div", {
                    class: "button-container"
                })
                let menuBtn = Help.makeEl("div", {
                    class: "menu-button",
                    id: "view-menu"
                }, "View Menu")
                textContainer.appendChild(btnContainer)
                btnContainer.appendChild(menuBtn)

            }
            const greenSide = () => {
                const green = document.querySelector(".green-side")
                let text1 = Help.makeEl("p", 0, "All Avocado")
                let text2 = Help.makeEl("p", 0, "All The Time")
                let textContainer = Help.makeEl("div", {
                    class: "green-text-container"
                },  text1, text2
                    )
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


