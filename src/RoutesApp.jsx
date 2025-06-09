import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutAuth from './layout/LayoutAuth'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import LayoutChat from './layout/LayoutChat'
import { ProtectedRoute } from './ProtectedRoute'

//const isAuthenticated = localStorage.getItem('token') !== null

function RoutesApp() {
    return (

        <Routes>
            <Route path='auth' element={<LayoutAuth />} >
                <Route index element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
            <Route path='/' element={
                <LayoutChat />
            }>
            </Route>
        </Routes>

    )
}

export default RoutesApp
