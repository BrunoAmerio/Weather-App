import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCity } from '../redux/actions.js';
import s from '../style/Card.module.css';

export default function Card(props) {
  const dispatch = useDispatch(); //Funcion de redux que despacha la accion que vamos a realizar

  const onClose = id =>{
    dispatch( deleteCity(id) )
  }


  return(
    <div className={props.alt.includes('Overcast') || props.alt.includes('cloud') ? `${s.container} ${s.cloud}` : props.alt.includes('rain') ? `${s.container} ${s.rain}` : props.alt.includes('Sunny') || props.alt.includes('Clear')  ? `${s.container} ${s.clear}` :  props.alt.includes('Mist') ? `${s.container} ${s.cloud}` : '' }>
      <button className={s.closeButton } onClick={ ()=> onClose(props.id) } >X</button>
      <Link to={`/city/${props.name}`}>
          <div className={s.dataContainer}>
            <h4> { props.name } </h4>
            <div className={s.tempDataContainer}>
              <p> MIN:<br/> {props.min}° </p>
              <p> MAX: <br/>{ props.max }° </p>
            </div>
            <img src={props.img} alt={props.alt} ></img>
          </div>
      </Link>

    </div>
  )
};