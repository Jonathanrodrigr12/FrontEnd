import React from "react";
import styles from "../style";
import "./login.css"

const boxShadowStyle = {
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
};

const Sidebar = () => {
  return (
    <div
      className="bg-glass-gradient h-full w-[30%] flex flex-col  justify-center p-10"
      style={boxShadowStyle}
    >
      <div
        className={`h-[70%] flex flex-col `}
      >
        <h2 className="text-color font-poppins font-semibold xs:text-[28px] text-[20px]">Filtros de busqueda</h2>
        <h4 className="text-color font-poppins font-semibold xs:text-[20px] text-[18px">Categorias</h4>
        <form className="flex flex-col items-start h-[80%] justify-evenly">

            <label><input type="checkbox"/> Aseo</label>
            <label><input type="checkbox"/> Alimentos</label>
            <label><input type="checkbox"/> Utiles Escolares</label>
            <label><input type="checkbox"/> Electrodomesticos</label>
            <label><input type="checkbox"/> Utiles escolares</label>
            <label><input type="checkbox"/> Ropa</label>

            <textarea className="border-primary p-5 resize-none h-[50px] w-[100%] overflow-hidden" placeholder="Buscar..."></textarea>
            
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
