
const Menu = (() => {
    const content = document.getElementById("content")
    const clearContent = () => {
        return content.innerHTML = ""
    }
    return {
        clearContent
    }
})()

export {Menu}