import React from 'react';
import SearchBar from './SearchBar';
import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';
import s from '../style/NavBar.module.css'

function click(){
     let menu = document.querySelector(`.${s.secondMenu}`);
     menu.classList.toggle(`${s.toggleMenu}`);
}

const NavBar= () => {
     return (
          <div className={ s.container }>

               <div className={s.buttonContainer}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
               </div>

               <SearchBar class={s.searchBar} />
               <button className={s.menu} onClick={click}> <img src={menu} alt="menuIcon" /> </button>

               <div className={s.secondMenu}>
                    <Link to='/' onClick={click}>Home</Link>
                    <Link to='/about' onClick={click}>About</Link>
               </div>

          </div>
     );
};

export default NavBar;