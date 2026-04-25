import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulesFetchDay({date}){
    try {

        const response = await fetch(`${apiConfig.URL}/schedules`)

        const data = await response.json()

        const schedulesDay = data.filter((day) => 
            dayjs(date).isSame(day.when, "day")
        )

        return schedulesDay

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos dos dias selecionados")
    }

}   