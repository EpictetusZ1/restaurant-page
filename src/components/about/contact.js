import Help from "../../helpers/helpers";

const Contact = (() => {
    const showContact = (content) => {
        const background = () => {
            let backDiv = Help.makeEl("div", {
                class: "about-container"
            })
            content.appendChild(backDiv)
        }
        background()

        const contactContent = document.querySelector(".about-container")
        const addTitle = () => {
            let titleCont = Help.makeEl("div", {
                class: "title-container"
            })

            let title = Help.makeEl("div", {
                class: "menu-title"
            }, "Contact Us")

            titleCont.appendChild(title)

            contactContent.appendChild(titleCont)

            const buildAbout = () => {
                const menu = Help.makeEl("div", {
                    class: "menu-background"
                })
                contactContent.appendChild(menu)
            }
            buildAbout()
        }
        addTitle()

        const addDesc = () => {

        }
    }
    return {
        showContact
    }
})()

export default Contact