import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [, productPrimaryKey] = itemClicked.id.split("--")
            for (const product of products) {
                if (parseInt(productPrimaryKey) === product.id) {
                    window.alert(`${product.name} costs $${product.price}`)
                } 
            }
        }
    }
)


export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

