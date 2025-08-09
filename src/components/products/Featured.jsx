
import React from 'react'
import logoDogCatMain from '../../assets/Textured-Fabric-Display.png'

function Featured() {
  return (
    <main className='text-center py-6 px-8 bg-orange-50 md:text-left md:flex justify-between items-center gap-10 md:py-1'>
        <div>
            <h1 className='font-extrabold text-orange-300 uppercase text-4xl my-4 md:text-6xl'>Crea sin límites</h1>
            <p className='font-semibold text-left my-4 md:text-xl text-orange-300 uppercase'>Diseña con estilo y calidad. Elige telas que inspiran.</p>
            <p className='text-lg my-6 font-sans text-stone-700'>Explora nuestra colección y encuentra la tela perfecta para cada idea. Desde proyectos sencillos hasta confecciones profesionales, en Unitex tenemos lo que necesitas para hacer realidad tus creaciones.</p>

        </div>
        <div className='hidden md:block'>
            <img src={logoDogCatMain} alt="textiles premium" />
        </div>
    </main>
  )
}

export default Featured