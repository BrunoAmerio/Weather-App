import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCity } from '../redux/actions.js';
import s from '../style/Card.module.css';

const Card = props => {
  const dispatch = useDispatch();
  const onClose = id =>{
    dispatch( deleteCity(id) )
  }

  return <div className={s.container}>
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
};

export default Card;