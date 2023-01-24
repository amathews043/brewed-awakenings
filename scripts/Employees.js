import { getEmployees, getOrders } from "./database.js"


const employees = getEmployees()
const orders = getOrders()


document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeePrimaryKey] = itemClicked.id.split("--")

            let matchingEmployee = null 
            for (const employee of employees){
                if(parseInt(employeePrimaryKey) === employee.id){
                    matchingEmployee = employee
                }
            }

            let numOfOrders = 0
            for (const order of orders){
                if(order.employeeId === matchingEmployee.id) {
                    numOfOrders += 1
                }
            }
            window.alert(`${matchingEmployee.name} sold ${numOfOrders} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

