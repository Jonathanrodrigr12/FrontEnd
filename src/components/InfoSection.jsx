import React from 'react'
import styles from "../style";
import "./login.css"

    const boxShadowStyle = {
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
      };

const InfoSection = () => {
  return (
     <div className="bg-glass-gradient h-full w-[70%] flex flex-col  justify-center p-10"
      style={boxShadowStyle}>
       <div className={`h-[70%] flex flex-col `}>
        <h2 className="text-color font-poppins font-semibold xs:text-[28px] text-[20px]">Detalle del producto</h2>
        <br/>
        <div className={`h-[100%] flex flex-row `} >    
          <div className='w-[300px] h-[300px] bg-primary relative z-[1] rounded-md overflow-hidden flex items-left justify-center ml-4'>
            <img
              src='arroz.jpg' // Replace with the actual image path for the second product
              alt='Product Image'
              className='w-full h-full object-cover' // Ensure the image covers the container
            />
          </div> 
          <div className={`flex flex-col flex items-left ml-4`}>
             <h1 className="text-color font-poppins font-semibold xs:text-[35px] text-[35px] ">Arroz</h1>
             <h4 className="text-color font-poppins font-semibold xs:text-[20px] text-[18px">Producto en promoción</h4>
             <br/>
             <div className={`flex flex-row flex items-center`} >
               <h1 className="text-color font-poppins font-semibold xs:text-[35px] text-[35px]"><del>Antes $14.500</del></h1>
             </div>
               <div className={`flex flex-row flex items-center`} >
               <h1 className="text-color font-poppins font-semibold xs:text-[35px] text-[35px]">Ahora $12.500</h1>
             </div>
             <br/>
             <h4 className="text-color font-poppins font-semibold xs:text-[20px] text-[18px">Arroz Blanco FLOR HUILA 5000 gr</h4>
             <br/>
             <a href="" className='w-[300px] h-[40px] bg-secondary text-color font-poppins font-semibold xs:text-[15px] text-[20px] bottom-0 p-2 flex justify-center rounded-full'>Añadir al carro</a>
           </div> 
            <img className='w-[100px] h-[100px] bg-primary relative z-[1] rounded-md overflow-hidden flex items-left justify-center ml-4'
                  src='ofertas.png' // Replace with the actual image path for the second product
                  alt='Product Image'// Ensure the image covers the container
                />
         </div>
       </div>
  </div>  
  )
}

export default InfoSection