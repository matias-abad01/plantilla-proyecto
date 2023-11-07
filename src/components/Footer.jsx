import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
   
    const onInputs = (ev)=>{     
        let padre = ev.target.parentElement;
        padre.childNodes[1].classList.add(`${styles.labelMov}`)   
    }

    const offInputs = (ev)=>{
        if (ev.target.value) return; 
        let padre = ev.target.parentElement;
        padre.childNodes[1].classList.remove(`${styles.labelMov}`)
    }
       
  return (
    <>
        <div className={styles.footer}>
            <form>
                <h3>envíanos un mensaje</h3>
                <div className={styles.inputsContent}>
                    <input type="text" name="nombre" id="nombre" autoComplete='off' onFocus={(ev)=>onInputs(ev)} onBlur={(ev)=>offInputs(ev)}/>
                    <label htmlFor="nombre">Nombre Completo:</label>
                </div>
                <div className={styles.inputsContent}>
                    <input type="tel" name="telefono" id="telefono" autoComplete='off' onFocus={(ev)=>onInputs(ev)} onBlur={(ev)=>offInputs(ev)}/>
                    <label htmlFor="telefono">telefono:</label>
                </div>
                <div className={styles.inputsContent}>
                    <input type="email" name="correo" id="correo" autoComplete='off' onFocus={(ev)=>onInputs(ev)} onBlur={(ev)=>offInputs(ev)}/>
                    <label htmlFor="correo">correo electronico:</label>   
                </div>
                <textarea name="mensaje" id="mensaje" rows="5" placeholder='Escribir mensaje...'></textarea>
                <div className={styles.buttonContent}>
                    <button type="submit">enviar</button>
                </div>
            </form>
            <div className={styles.secondForm}>
                <div className={styles.redesSociales}>
                    <h3>Siguenos</h3>
                    <div>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className={styles.info}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, laborum nostrum. Rem quasi dolorum dignissimos cum dolores quisquam maiores tempora ab autem? Libero necessitatibus sint numquam nesciunt est quam hic?</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer