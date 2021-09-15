import Help from "../helpers/helpers";


const NavBar = (() =>{
    const nav = document.getElementById("nav")

    const addNavItems = () => {
        let homeBtn = Help.makeEl("div", {
            class: "nav-item",
            id: "home"
        }, "Home")
        nav.appendChild(homeBtn)
    }

    return {
        addNavItems
    }
})()

export default NavBar