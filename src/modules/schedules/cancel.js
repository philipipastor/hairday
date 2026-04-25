import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista
periods.forEach((period) => {
    
    //Captura o evento de clique na lista
    period.addEventListener("click", async (e) =>{
        if(e.target.classList.contains("cancel-icon")){

            //Procura a li mais próxima do elemento clicado
            const item = e.target.closest("li")

            //pega o id do agendamento para remover
            const { id } = item.dataset

            //Confirma que o id foi selecionado
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento ?")

                if(isConfirm){
                    //Faz a requisição na API para cancelar
                    await scheduleCancel({ id })

                    //Recarrega os agendamentos
                    await schedulesDay()

                }
            }
        }
    })
});