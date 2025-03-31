import React from 'react'
import NavBar from '../Resusable Components/NavBar'

const Profile = () => {
    return (
        <div className='w-full bg-[#F7F7FB] relative'>
            <NavBar activeRoute='profile' />
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 bg-[#F7F7FB] z-10'>

                Profile page here!
            </div>
        </div>
    )
}

export default Profile