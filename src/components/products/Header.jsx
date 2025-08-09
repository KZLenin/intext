import React from 'react'
import { Link } from 'react-router-dom'




function Header() {
  return (
    <header className='bg-orange-50 container mx-auto h-40 text-center py-4 md:flex justify-between items-center px-4 md:h-15'>
        <h1 className='font-bold text-2xl my-2 text-orange-300'>IN<span className='text-stone-900'>TEX</span></h1>

        <nav className='flex gap-4'>
            <Link to="/allproducts" className='font-bold hover:text-orange-300 hover:underline'>Todos los productos</Link>
            <Link to="/categories" className='font-bold hover:text-orange-300 hover:underline'>Categorías</Link>
            <Link to="/carrito" className='font-bold hover:text-orange-300 hover:underline'>Cart (0)</Link>
            <Link to="/profile" className='font-bold hover:text-orange-300 hover:underline'>Perfil</Link>
        </nav>

    </header>
  )
}

export default Header