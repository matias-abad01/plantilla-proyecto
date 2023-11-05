
import { useState, useEffect } from 'react';
import styles from './Contenedor.module.scss'

const Contenedor = () => {

const [count, setCount] = useState(0);
const numero = 2;

const sumar = () => {
    setCount(count + 1);
    console.log("cada vez que se toca")
}

useEffect(() => {
  console.log("solo se ejecutara una vez");

}, [])


    
  return (
    <>
        <div className={styles.contenedor}>
            {count}
        </div>
        <button onClick={sumar}>tocar</button>
    </>

  )
}



export default Contenedor