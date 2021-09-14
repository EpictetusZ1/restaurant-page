import avoBowl from "./assets/images/avoBowl.png"
import Helper from "../helperFunctions/helpers";

const Hero = (() => {

    const showAvocado = () => {
        const contentMain = document.getElementById("content")

        const displayHero = () => {
            const bowlImg = Helper.makeEl("img", {
                src: avoBowl,
                class: "avo-bowl"
            })
            let main = Helper.makeEl("div", {
                class: "main"
            })
            contentMain.appendChild(main)
            return (() => {
                let bowlCont = Helper.makeEl("div", {
                    class: "bowl-container"
                })
                main.appendChild(bowlCont)
                bowlCont.appendChild(bowlImg)
            })()
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
                    class: "pink-text-container",
                    textContent: "The Millennial Restaurant"
                })
                textContainer.textContent = "The Millennial Restaurant"
                pink.appendChild(textContainer)
            }
            const greenSide = () => {
                const green = document.querySelector(".green-side")
                let textContainer = Helper.makeEl("div", {
                    class: "green-text-container"
                })
                textContainer.textContent = "All Avocado, \n All The Time"
                green.appendChild(textContainer)
            }
            pinkSide()
            greenSide()
        }
        displayHero()
        displayBackDrop()
        showText()
    }

    return {
        showAvocado
    }
})()

export default Hero


