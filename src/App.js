import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { NotFoundPage } from './components/404/NotFoundPage'
import HomePage from './components/homepage/HomePage'
import { MenuCreatorPage } from './components/MenuCreator/MenuCreatorPage'
import { DashboardPage } from './components/UserDashboard/DashboardPage'
import { DishCreatorPage } from './components/DishCreator/DishCreatorPage'

export const App = () => {
  return (
    <HashRouter>
        <Routes>

            <Route path='/' element={<HomePage/>} />

            <Route path='/create-menu' element={<MenuCreatorPage/>} />

            <Route path='/create-dish' element={<DishCreatorPage/>} />

            <Route path='/update-dish/:id' element={<DishCreatorPage/>} />

            <Route path='/dashboard' element={<DashboardPage/>} />

            <Route path='/dashboard/*' element={<DashboardPage/>} />

            <Route path='/*' element={<NotFoundPage/>} />

        </Routes>
    </HashRouter>
  )
}
