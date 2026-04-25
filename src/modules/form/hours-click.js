export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    
    hours.forEach((available) => {
        available.addEventListener("click", (eventSelected) => {
            
            //remove a classe hour-selected de todas as li não selecionadas.
            hours.forEach((eventNoSelected) => {
                eventNoSelected.classList.remove("hour-selected")
            })
        
            //adiciona a classe na li clicada.
            eventSelected.target.classList.add("hour-selected")

        })
    })
}