/*
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.module.css"
import {useState, useEffect} from "react"
// import {addDays, isWeekend} from "date-fns" | Finais de semana

function ReactDatePicker(){
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const dataAtual = new Date()
    /* Finais de semana
    const isWeekendDay = (date) => {
        return isWeekend(date);
    }
    const filterWeekends = (date) => {
        return !isWeekendDay(date);
    }
    */
   /* Dias importantes, como férias, feriados ou datas comemorativas.*/
/*   const importantDates = ["10/08/2025", "10/11/2024", "25/12/2024"]; /*| Data marcada. */
/*   const highlightImportantDates = (date) => {
       const formattedDate = date.toLocaleDateString("pt-BR");
       return importantDates.includes(formattedDate);
    }

    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
            }, 1000);
        return() => clearInterval(intervalId);
        }, []);
   
    return(
        <div>
            <DatePicker   */
            /* inline | Fazer com que a tabela do calendário não minimize */
        /*    selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="YYYY/DD/MM; hh:mm"
            dataAtual={dataAtual}
            showTimeSelect
            timeIntervals={30} */
            /* filterDate={filterWeekends} | Finais de semana */
        /*    highlightImportantDates={importantDates.map((dateString) => new Date(dateString))}
        <p>{currentDate.toLocaleString()}</p>
            />
        </div>
    )
}
export default ReactDatePicker
*/


function dataAtualFormatada(){
    const data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}
export default dataAtualFormatada