import avoBowl from "./assets/images/avoBowl.png"

const Hero = (() => {

    const showAvocado = () => {
        const contentMain = document.getElementById("content")
        const div = document.createElement("div")
        const bowlImg = document.createElement("img")
        bowlImg.src=avoBowl
        bowlImg.classList.add("avo-bowl")

        const displayHero = () => {
            let main = div.cloneNode()
            main.classList.add("main")
            contentMain.appendChild(main)
            return (() => {
                let bowlCont = div.cloneNode()
                bowlCont.classList.add("bowl-container")
                main.appendChild(bowlCont)
                return bowlCont.appendChild(bowlImg)
            })()
        }

        const displayBackDrop = () => {
            const main = document.querySelector(".main")

            const showGreen = () => {
                let green = document.createElement("div")
                green.classList.add("green-side")
                main.appendChild(green)
            }
            const showPink = () => {
                let pink = document.createElement("div")
                pink.classList.add("pink-side")
                main.appendChild(pink)
            }
            return {
                showGreen,
                showPink
            }
        }

        const showText = () => {
            const pinkSide = () => {
                const pink = document.querySelector(".pink-side")
                let textContainer = document.createElement("div")
                textContainer.classList.add("pink-text-container")
                textContainer.textContent = "The Millennial Restaurant"
                pink.appendChild(textContainer)
            }
        return {
                pinkSide
        }
        }


        return {
            displayHero,
            displayBackDrop,
            showText
        }
    }

    return {
        showAvocado
    }
})()

export default Hero


