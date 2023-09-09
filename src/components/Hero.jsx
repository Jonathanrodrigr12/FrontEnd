import React from 'react'
import styles, {layout} from '../style'
import "./login.css"

const Hero = () => {
  return (
    <div className='w-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className={`${layout.sectionImg} ${styles.paddingX}`}>
        <div>
          <h2 className={`${styles.heading2}`}>¡Bienvenidos<span className='block'> MiniSuperMarket!</span></h2>
          <p className={`${styles.paragraph} pt-5 pb-10 w-90%]`}>El mejor supermercado del pais! estate pendiente a nuestras nuevas promociones y beneficios solo para ti!</p>
          <a href="/Productos" className='p-5 bg-glass-gradient rounded-full font-bold hover:bg-black'>Productos</a>
          </div>
          <div>
          <img src='Promocion.png' className='w-[700px]'/>
          <img src='comida.png' className='w-[700px]'/>
          </div>
      </div>
    </div>
  )
}

export default Hero