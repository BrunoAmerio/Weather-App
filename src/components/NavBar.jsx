import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import s from '../style/NavBar.module.css'

function click(){
     let menu = document.querySelector(`.${s.secondMenu}`);
     menu.classList.toggle(`${s.toggleMenu}`)
}

function NavBar(){
     return (
          <div className={ s.container }>
               <div className={s.buttonContainer}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
               </div>
               <SearchBar class={s.searchInput} />
               <div className={s.menu} onClick={click}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
               </div>
               <div className={s.secondMenu}>
                    <Link to='/' onClick={click}>Home</Link>
                    <Link to='/about' onClick={click}>About</Link>
               </div>
          </div>
     )


}

export default NavBar;