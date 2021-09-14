import "./styles/style.css"
import avoBowl from "./assets/images/avoBowl.png"


const Hero = (() => {

    const contentMain = document.getElementById("content")
    const bowlImg = document.createElement("img")
    bowlImg.src=avoBowl
    bowlImg.classList.add("avo-bowl")

    const div = document.createElement("div")

    const displayHero = () => {
        let main = div.cloneNode()
        main.classList.add("main")
        contentMain.appendChild(main)
    }

    const displayBowlCont = () => {
        const main = document.querySelector(".main")
        let bowlCont = div.cloneNode()
        bowlCont.classList.add("bowl-container")
        main.appendChild(bowlCont)
        bowlCont.appendChild(bowlImg)
    }

    return {
        displayHero,
        displayBowlCont
    }
})()


Hero.displayHero()
Hero.displayBowlCont()
