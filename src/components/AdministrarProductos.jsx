import React from 'react'
import styles from "../style";
import "./login.css"

const AdministrarProductos = () => {
  const borrar = () => {
    let accion = confirm("¿Desea borrar el producto?");
    alert( accion ); // true 
  }
  return (
  <div className="ContenedorPrincipal">
    <div className="Admin-panel">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span className="input-group-addon">
        Ingresar descripción del producto
      </span>
      <input className="CajaTextoBuscar" type="text" name="Nombre" required/>
      <a className="BotonesTeam5" href="">Buscar</a>
      <a className="BotonesTeam5" href="/Creacion">Agregar</a>
      <br/>
      <br/>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Precio</th>
        <th>Categoria</th>
        <th>Descuento</th>
        <th>Acción</th>
      </tr>
      <tr>
        <td>Shampoo</td>
        <td>   <img
            src='shampoo.jpg' // Replace with the actual image path for the second product
            alt='Product Image'
            className='w-full h-full object-cover' // Ensure the image covers the container
          /></td>
        <td>$20.530</td>
        <td>Aseo</td>
        <td>25%</td>
        <td WIDTH="30%">
          <a className="BotonesTeam2" href="/Modificar">Modificar</a> 
          <button className="BotonesTeam3" onClick={borrar}>Borrar</button>
        </td>
      </tr>
      <tr>
        <td>Arroz</td>
        <td>    <img
              src='arroz.jpg' // Replace with the actual image path for the second product
              alt='Product Image'
              className='w-full h-full object-cover' // Ensure the image covers the container
            /></td>
        <td>$14.500</td>
        <td>Alimentos</td>
        <td>14%</td>
        <td WIDTH="30%">
          <a className="BotonesTeam2" href="">Modificar</a> 
          <button className="BotonesTeam3" onClick={borrar}>Borrar</button>
        </td>
      </tr>
    </table> 
    </div>
  </div>
  )
}

export default AdministrarProductos