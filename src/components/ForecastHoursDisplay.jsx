import React from "react";
import s from '../style/ForecastHourDisplay.module.css'

function ForecastHourDisplay(props){
     let array = props.hours;
     let display = <div className={s.container}>
               {
                    array.map( item => {
                         return(
                              <div className={s.hourContainer}>
                                   <p>Hora: {item.time.split(' ')[1]}</p>
                                   <p>Temp: {item.temp_c}°</p>
                                   <p>Humedad: {item.humidity}%</p>
                                   <p>Viento: a {item.wind_kph}km/h</p>
                                   <img src={item.condition.icon} alt={item.condition.text}className={s.img}/>
                              </div>
                         )
                    })
               }
     </div>

     return(display)


}

export default ForecastHourDisplay;