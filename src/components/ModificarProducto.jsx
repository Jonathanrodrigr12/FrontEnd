import React from 'react'
import styles from "../style";
import "./login.css"

const ModificarProducto = () => {
  return (
    <div className="form-crear-container">
      <div className="crear-form">
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="text-color font-poppins font-semibold xs:text-[28px] text-[20px]">Modificación del producto</h2>
      <br/>
        <form action="/MenuAdministrar">
          <div class="input-group">
            <span class="input-group-addon">
              Nombre
            </span>
            <input type="text" name="Nombre" value="Shampoo" required/>
          </div>
            <div class="input-group">
            <span class="input-group-addon">
              Descripción
            </span>
            <input type="text" name="descripcion" value="Shampoo Head & Shoulders Limpieza Y Revitalización Aceite De Argán x 375ml"required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Categoría
            </span>
            <input type="text" name="descripcion" value="Aseo" required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Precio
            </span>
            <input type="number" name="Valor" Value="20530"min="100"required/>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Descuento
            </span>
            <input type="number" name="Descuento" value="25" min="0" max="50"required/>
            <span class="input-group-addon">
              %
            </span>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              Imagen
            </span>
            <input type="file" name="imagen"/>
          </div>
          <div class="input-group">
            <button className="button" type="submit">Modificar producto</button>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default ModificarProducto