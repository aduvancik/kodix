import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function Layout() {
    return (
        <div className="layout tracking-tighter font-inter relative">
            <Header />
            <main className='relative'>
                <Outlet />
                <img className="w-[250px] lg:w-[531px] absolute top-0 left-0 z-[-1]" src="/ellipse-left.png" alt="ellipse" />
                <img className='w-[250px] lg:w-[418px] absolute top-[-100px] right-0 z-[-1]' src="/ellipse-right.jpg" alt="ellipse" />
            </main>
        </div>
    )
}
