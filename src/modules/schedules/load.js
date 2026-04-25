import { schedulesFetchDay } from "../../services/schedules-fetch-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { period } from "./show.js"


//seleciona o input da data
const selectDate = document.getElementById("date")

export async function schedulesDay(){
    //Obtem a data do input
    const date = selectDate.value

    //buscar na api os agendamentos
    const dailySchedules = await schedulesFetchDay({date})

    //exibe os agendamentos
    period(dailySchedules)

    //busca os horários para poder renderizar 
    hoursLoad({date, dailySchedules})
}