import Help from "../helpers/helpers";
import Menu from "../menu/menu";
import Hero from "./loadHero";

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