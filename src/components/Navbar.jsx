import React from 'react'
import styles from './Navbar.module.scss'


const Navbar = () => {
    const mostrarMenu = ()=>{
        let navbar = document.querySelector(`.${styles.navbar}`);
        navbar.classList.toggle(`${styles.navbarMostrar}`);
        let logo = document.querySelector(`.${styles.logo}`);
        logo.classList.toggle(`${styles.logoMov}`);
        let menu = document.querySelector(`.${styles.menu}`);
        menu.classList.toggle(`${styles.menuMov}`);
        let headers = document.querySelector(`.${styles.header}`);
        headers.classList.toggle(`${styles.headerMov}`);
       
        
    }
  return (
    <div className={styles.header}>
        <div className={styles.navbar}>
            <a href="" className={styles.logo}>
                <i className="fa-brands fa-youtube"></i>
                <p>el perezoso</p>
            </a>
            <nav className={styles.menu}>
                <a href="/">juegos</a>
                <a href="/">videos</a>
                <a href="/">fotos</a>
                <a href="/">mas</a>
        
            </nav>
            
        </div>
        <div className={styles.hamburguer} onClick= {mostrarMenu}>
                <i className="fa-sharp fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Navbar