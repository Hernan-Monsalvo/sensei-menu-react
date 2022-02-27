import React from 'react'
import { Navbar } from '../homepage/Navbar'
import { DashboardNav } from './DashboardNav';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { MenuList } from './MenuList';
import { DishList } from './DishList';
import { DishDetail } from './DishDetail';
import { useState } from 'react';
import { MenuDetail } from './MenuDetail';


export const DashboardPage = () => {

    const logOut = () => {
        document.cookie = 'token=; Max-Age=0; SameSite=None; Secure'
        window.location.reload(); // aca tendria que redirigir a home
    }

  return (
    <div>
        <Navbar logged={true} logOut={logOut}/>
        <DashboardNav/>
        <Routes>
            <Route path='menus' element={<MenuList/>}/>

            <Route path='menus/:id' element={<MenuDetail/>} />

            <Route path='dishes' element={<DishList/>}/>

            <Route path='dishes/:id' element={<DishDetail/>}/>
        </Routes>

    </div>
  )
}
