import dayjs from "dayjs"
import { schedulesNew } from "../../services/schedulesNew.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectDate = document.getElementById("date")
const client = document.getElementById("client")

//Passando a data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a atual
selectDate.value = inputToday
selectDate.min = inputToday

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    try {
        const name = client.value.trim()
        if(!name){
            return alert("Informe o nome do cliente")
        }

        //Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected) {
            return alert("Selecione um horário ")
        }
        
        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectDate.value).add(hour,"hour")

        const id = new Date().getTime().toString()

        //Faz o agendamento
        await schedulesNew({id,name,when})

        //Recarrega os agendamentos
        await schedulesDay()

        client.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
})


