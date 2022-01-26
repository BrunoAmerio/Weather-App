import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ForecastHourDisplay from "./ForecastHoursDisplay";
import s from '../style/CardDetail.module.css'


export default function CardDetail(){
     const cities = useSelector( state => state.cities )
     let load = true
     let card;
     const { name } = useParams()

     if(load){
          let city = cities.filter( item => item.location.name === name )
          city = city[0]
          load = false;
          card =    <div className={s.container} key={1}>
                         <div className={s.currentContainer} key={2}>
                              <div className={s.imgContainer}>
                                   <h1>{city.location.name}</h1>
                                   <p>{city.location.country}</p>
                                   <img src={city.current.condition.icon} alt={city.current.condition.text} />
                                   <h5>{city.current.condition.text}</h5>
                                   <p>Cantidad de nubes: {city.current.cloud}%</p>
                              </div>
                              <div className={s.tempData} key={3}>
                                   <h4>Temperatura</h4> 
                                   <p>Sensación Termica: {city.current.feelslike_c}°</p>
                                   <p>Media: {city.current.temp_c}°</p>
                                   <p>Max: {city.forecast.forecastday[0].day.maxtemp_c}°</p>
                                   <p>Min: {city.forecast.forecastday[0].day.mintemp_c}°</p>
                              </div>
                              <div className={s.tempData} key={4}>
                                   <h4>Datos Generales</h4>
                                   <p>Velocidad del Viento: {city.current.wind_kph} KM/H</p>
                                   <p>Humedad: {city.current.humidity}%</p>
                              </div>
                         </div>
                         <ForecastHourDisplay hours={city.forecast.forecastday[0].hour}/>
                         <div className={s.forecastContainer} key={5}>
                              {city.forecast.forecastday ? city.forecast.forecastday.map( item => {
                                   return(
                                        <div className={s.forecastCard}>
                                             <h1>Day: {item.date.split('-')[2]}</h1>
                                             <p>Max: {item.day.maxtemp_c}°</p>
                                             <p>Min: {item.day.mintemp_c}°</p>
                                             <img src={item.day.condition.icon} alt={item.day.condition.text}/>
                                             <p>Huemdad: {item.day.avghumidity}%</p>
                                        </div>
                                   )
                              }) : null}
                         </div>
                    </div>
     }

     return(
          <div>
               {load ? 'Cargando...' : card}
          </div>
     )

}