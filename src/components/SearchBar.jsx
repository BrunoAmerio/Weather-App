import React from 'react';
import { useDispatch } from 'react-redux';
import { getCity } from '../redux/actions.js';
import s from '../style/Search.module.css';

export default function SearchBar(props) {

  const dispatch = useDispatch(); //Funcion de redux que despacha la accion que vamos a realizar

  const handleclick = e => {
    e.preventDefault()  
    const ciudad = document.querySelector('#searchInput').value
    document.querySelector('#searchInput').value = '';
    dispatch( getCity(ciudad) ) //Envia la accion con el nombre ingresado
  }

  return <div className= { props.class }>
    
    <button className={ `${s.searchButton} ` } onClick={handleclick}>

      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="white"/>
      </svg>

    </button>
    <input type='text' autoComplete='off' className={`${s.input}`} id='searchInput'></input> 

  </div>
};



