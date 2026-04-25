import { schedulesDay } from "../schedules/load"

//Seleciona o input de data
const selectDate = document.getElementById("date")

selectDate.addEventListener("change", () => {
    schedulesDay()
})