import React from 'react';
import { useDispatch } from 'react-redux';
import { getCity } from '../redux/actions.js';
import search from '../img/search.svg';
import s from '../style/Search.module.css';

const SearchBar = props => {

  const dispatch = useDispatch(); //Funcion de redux que despacha la accion que vamos a realizar

  const handleclick = e => {
    e.preventDefault()  
    const ciudad = document.querySelector('#searchInput').value
    document.querySelector('#searchInput').value = '';
    dispatch( getCity(ciudad) ) //Envia la accion con el nombre ingresado
  }

  return <div className= { props.class }>
    
    <button className={ `${s.searchButton} ` } onClick={handleclick}>
      <img src={search} alt='searchIcon'/>
    </button>
    
    <input type='text' autoComplete='off' className={`${s.input}`} id='searchInput' placeholder='Insert city to search'></input> 

  </div>
};

export default SearchBar