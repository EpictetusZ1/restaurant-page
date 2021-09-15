import Help from "../helpers/helpers";
import Hero from "./loadHero";
import Menu from "./menu/menu";
import Contact from "./contact/contact";

const Update = (() => {
    const content = document.getElementById("content")
    const clear = () => content.innerHTML = ""
    const page = (c) => {
        switch (c) {
            case 1:
                clear()
                Menu.showMenu(content).populateMenu()
                break
            case 2:
                clear()
                Contact.showContact(content)
                break
            case 3:
                clear()
                Hero.showAvocado(content)
                break
            default:
                Hero.showAvocado(content)
                break
        }
    }
    return {
        page
    }
})()


export default Update