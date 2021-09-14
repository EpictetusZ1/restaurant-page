const Helper = (() => {

    const makeEl = (type, attrs) => {
        const el = document.createElement(type)
        for (let key in attrs) {
            el.setAttribute(key, attrs[key])
        }
        return el
    }
    return {
        makeEl
    }
})()

export default Helper