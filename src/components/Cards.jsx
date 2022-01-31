import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../redux/actions.js';
import s from '../style/Cards.module.css'

export default function Cards() {
  const dispatch = useDispatch();
  let cities = useSelector(state => state.cities)
  const citiesList = cities.map( ciudad =>{

    return(
        <Card key={ciudad.location.localtime_epoch}
          id={ciudad.location.localtime_epoch}
          name={ciudad.location.name} 
          max={ciudad.forecast.forecastday[0].day.maxtemp_c} 
          min={ciudad.forecast.forecastday[0].day.mintemp_c} 
          img={ciudad.current.condition.icon}
          alt={ciudad.current.condition.text}
          />
    )
  }) 

  useEffect(()=>{
    dispatch( getAll() )
  },[])
  

  return <div className={ s.container }> {citiesList} </div>
};