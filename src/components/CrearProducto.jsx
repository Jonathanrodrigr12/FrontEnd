import React from 'react'
import styles from "../style";
import "./login.css"

const CrearProducto = () => {
  return (
    <div className="form-crear-container">
      <div className="crear-form">
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="text-color font-poppins font-semibold xs:text-[28px] text-[20px]">Creación del producto</h2>
      <br/>
        <form action="/MenuAdministrar">
          <div class="input-group">
            <span class="input-group-addon">
              Nombre
            </span>
            <input type="text" name="Nombre" required/>
          </div>
            <div class="input-group">
            <span class="input-group-addon">
              Descripción
            </span>
            <input type="text" name="descripcion"required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Categoría
            </span>
            <input type="text" name="descripcion"required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Precio
            </span>
            <input type="number" name="Valor" min="100"required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Descuento
            </span>
            <input type="number" name="Descuento"min="0" max="50"required/>
            <span class="input-group-addon">
              %
            </span>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Imagen
            </span>
            <input type="file" name="imagen"required/>
          </div>
          <div class="input-group">
            <button className="button" type="submit">Crear producto</button>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default CrearProducto