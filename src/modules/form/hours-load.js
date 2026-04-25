import { openingHours } from "../../utils/openinghours.js"
import { hoursClick } from "./hours-click.js"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    
    hours.innerHTML = ""

    const unavailableHour = dailySchedules.map((schedules) => 
        dayjs(schedules.when).format("HH:mm")
    )
    
    const opening = openingHours.map((hour) =>{
        const hoursMinutes = hour.split(":")
        const [hours] = hoursMinutes

        const isHourPast = dayjs(date).add(hours, "hour").isAfter(dayjs())

        const available =  !unavailableHour.includes(hour) && isHourPast
        

        return({
            hour,
            available
        })
    })
 
    opening.forEach(({hour,available})=> {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if(hour === "9:00"){
            titleHourPeriod("Manhã")
        }
        else if(hour === "13:00"){
            titleHourPeriod("Tarde")
        }
        else if(hour === "18:00"){
            titleHourPeriod("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}

function titleHourPeriod(title){
    const period = document.createElement("li")
    period.classList.add("hour-period")
    period.textContent = title
    hours.append(period)
}