function setup() {
    const divCreate = document.createElement("div")
    document.body.appendChild(divCreate)

    divCreate.setAttribute("id", "container")

    const buttonCreate = document.createElement("button")
    
    const container = document.getElementById("container")

    container.appendChild(buttonCreate)

    buttonCreate.setAttribute("id", "button")
    buttonCreate.innerText = "Submit"
}

function main() {

    setup()


}

main()