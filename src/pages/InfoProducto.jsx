import React from 'react'
import { InfoSection, Sidebar } from '../components'

const InfoProducto = () => {
  return (
     <div className='h-[100vh] bg-glass-gradient flex '>
      <Sidebar/>
      <InfoSection/>
    </div>
  )
}

export default InfoProducto