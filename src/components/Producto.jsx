import React from 'react';
import "./login.css"

const Producto = () => {
  return (
    <div className='h-[70%] w-[90%] flex flex-col justify-center p-10'>
      {/* Parent container for both elements */}
      <div className='flex'>

        {/* First Product */}
        <div className='w-[300px] h-[300px] bg-primary relative z-[1] rounded-md overflow-hidden flex items-center justify-center ml-4'>
          <img
            src='shampoo.jpg' // Replace with the actual image path for the second product
            alt='Product Image'
            className='w-full h-full object-cover' // Ensure the image covers the container
          />
          <div className='w-[300px] h-[40px] bg-secondary absolute z-[100] bottom-0 p-2 flex justify-between'>
            <p className='text-white font-bold'>15400</p>
            <p className='text-white font-bold'>Shampoo</p>
          </div>
        </div>

        {/* Second Product (same structure as the first) */}
        <div className='w-[300px] h-[300px] bg-primary relative z-[1] rounded-md overflow-hidden flex items-center justify-center ml-4'>
          <img
            src='arroz.jpg' // Replace with the actual image path for the second product
            alt='Product Image'
            className='w-full h-full object-cover' // Ensure the image covers the container
          />
          <div className='w-[300px] h-[40px] bg-secondary absolute z-[100] bottom-0 p-2 flex justify-between'>
            <p className='text-white font-bold'>12500</p>
            <p className='text-white font-bold'>Arroz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
