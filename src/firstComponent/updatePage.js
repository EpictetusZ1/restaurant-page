import Helper from "../helperFunctions/helpers";
import Menu from "../menuComp/menu";

const Update = (() => {
    const content = document.getElementById("content")
    const clear = () => content.innerHTML = ""
    const page = (c) => {
        switch (c) {
            case 1:
                clear()
                Menu.showMenu(content)
                break
        }
    }
    return {
        page
    }
})()


export default Update