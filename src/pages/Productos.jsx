import React from 'react'
import { Producto, Sidebar } from '../components'

const Productos = () => {
  return (
    <div className='h-[100vh] bg-glass-gradient flex '>
      <Sidebar/>
      <Producto/>
    </div>
  )
}

export default Productos