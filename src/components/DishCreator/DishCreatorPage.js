import React from 'react'
import { Navbar } from '../homepage/Navbar'
import { DishForm } from './DishForm'

export const DishCreatorPage = () => {
    const logOut = () => {
        document.cookie = 'token=; Max-Age=0; SameSite=None; Secure'
        window.location.reload(); // aca tendria que redirigir a home
    }
  return (
    <div>
        <Navbar logged={true} logOut={logOut}/>
        <DishForm/>
    </div>
  )
}
