import Help from "../../helpers/helpers";
import email from "./assets/icons/email_pink_24dp.svg";
import location from "./assets/icons/location_on_pink_24dp.svg";
import phone from "./assets/icons/phone_iphone_pink_24dp.svg";
import clock from "./assets/icons/schedule_pink_24dp.svg";

const Contact = (() => {
    const showContact = (content) => {
        const background = () => {
            let backDiv = Help.makeEl("div", {
                class: "contact-container"
            })
            content.appendChild(backDiv)
        }
        background()

        const contactContent = document.querySelector(".contact-container")
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
                    class: "contact-background"
                })
                contactContent.appendChild(menu)
            }
            buildAbout()
        }
        addTitle()

        const contactArea = document.querySelector(".contact-background")

        const contactCard = Help.makeEl("div", {
            class: "contact-card"
        })

        contactArea.appendChild(contactCard)

    }
    return {
        showContact
    }
})()

export default Contact