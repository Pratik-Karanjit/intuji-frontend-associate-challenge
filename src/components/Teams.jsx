import React from 'react'
import NavBar from '../Resusable Components/NavBar'

const Teams = () => {
    return (
        <div className='w-full bg-[#F7F7FB] relative'>
            <NavBar activeRoute='team' />
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 bg-[#F7F7FB] z-10'>

                Teams page here!
            </div>
        </div>
    )
}

export default Teams