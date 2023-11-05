import React from 'react'
import styles from './App.module.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Contenedor from './components/Contenedor';

const App = () => {



  return (
   <>
    <Navbar />
    <Contenedor/>
    <Section />
    <Footer />
   </>
  )
}


export default App