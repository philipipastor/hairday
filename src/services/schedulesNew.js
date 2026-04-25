import { apiConfig } from "./api-config.js";

export async function schedulesNew({id,name,when}){
    try {
        await fetch(`${apiConfig.URL}/schedules`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id,name,when})
        })
        
        alert("Agendamento realizado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Tente novamente, não foi possível concluir o agendamento")
    }
}