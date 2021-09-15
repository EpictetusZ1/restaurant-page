import Help from "../../helpers/helpers";
import email from "./assets/icons/email_pink_24dp.svg";
import mapThing from "./assets/icons/location_on_pink_24dp.svg";
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

        const addElements = () => {
            const contactArea = document.querySelector(".contact-background")


            const ContactItems = (desc, value, icon) => {
                return {desc, value, icon}
            }

            let location = ContactItems("Find Us:", "Somewhere in Liberty Village", mapThing)
            let call = ContactItems("Call Us:", "416-000-0000", phone)
            let hours = ContactItems("Hours:", "Open: Usually before noon. Close: 10ish", clock)
            let mail = ContactItems("Email:", "Nope, we don't like using email, hit us up on WhatsApp", email)

            let items = []

            items.push(location, call, hours, mail)

            const populate = (myArr) => {
                for (let i = 0; i < myArr.length; i++) {
                    // Append values to item
                    let icon = Help.makeEl("img", {
                        class: "contact-img",
                        src: myArr[i].icon
                    })
                    let desc = Help.makeEl("p", {
                        class: "contact-desc"
                    }, myArr[i].desc)

                    let descVal = Help.makeEl("p", {
                        class: "contact-value"
                    }, myArr[i].value)

                    // Make single form contact item
                    let element = Help.makeEl("div", {
                        class: "card-item",
                    }, icon, desc, descVal)
                   infoContainer.appendChild(element)
                }
            }


            const contactCard = Help.makeEl("div", {
                class: "contact-card"
            })

            let infoContainer = Help.makeEl("div", {
                class: "info-container"
            })
            populate(items)
            contactCard.appendChild(infoContainer)
            contactArea.appendChild(contactCard)
        }

        addElements()
    }

    return {
        showContact
    }
})()

export default Contact