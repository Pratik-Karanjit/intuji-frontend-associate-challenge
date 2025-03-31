import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import Calendar from "../assets/Calendar.svg";
import sms from "../assets/sms.svg";
import MyChart from "../assets/Chart.svg";
import twoUsers from "../assets/twoUsers.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import infoCircle from "../assets/info-circle.svg";
import logout from "../assets/login.svg";
import gallery from "../assets/gallery.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

const NavBar = ({ activeRoute = 'dashboard' }) => {
    // Use the activeRoute prop as the initial state
    const [activeNavItem, setActiveNavItem] = useState(activeRoute);
    const [hoveredNavItem, setHoveredNavItem] = useState(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    // Update activeNavItem whenever activeRoute prop changes
    useEffect(() => {
        setActiveNavItem(activeRoute);
    }, [activeRoute]);

    const handleNavigation = (route) => {
        setActiveNavItem(route);
        navigate(`/${route}`);
        setShowMobileMenu(false); // Close mobile menu on navigation
    };

    const renderNavIcon = (name, path) => {
        const isActive = activeNavItem === name;
        const isHovered = hoveredNavItem === name;
        const strokeColor = (isActive || isHovered) ? "#F9BA33" : "currentColor";

        switch (name) {
            case 'dashboard':
                return <LayoutDashboard size={22} stroke={strokeColor} />;
            default:
                return (
                    <div className="relative h-6 w-6">
                        <img
                            src={path}
                            alt={`${name} icon`}
                            className={`h-6 w-6 transition-opacity ${(isActive || isHovered) ? "opacity-0" : "opacity-100"}`}
                        />
                        {(isActive || isHovered) && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                {name === 'schedule' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#F9BA33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="#F9BA33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'message' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.4C5.26 9 5.13 9.01 5 9.02V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z" stroke="#F9BA33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" stroke="#F9BA33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'analytics' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 22H22M2 22V17M22 22V9M6 17V9M10 17V13M14 17V11M18 17V5" stroke="#F9BA33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'team' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.9999 14.44C5.6299 14.67 4.1199 14.43 3.0599 13.72C1.6499 12.78 1.6499 11.24 3.0599 10.3C4.1299 9.59004 5.6599 9.35003 7.0299 9.59003" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'profile' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'settings' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.35L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.35C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'help' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 16.2V12" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 8C11.93 8 11.85 8 11.78 8" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {name === 'logout' && (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.90002 7.56C9.21002 3.96 11.06 2.49 15.11 2.49H15.24C19.71 2.49 21.5 4.28 21.5 8.75V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 12H3.62" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="#F9BA33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        )}
                    </div>
                );
        }
    };

    return (
        <div>
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white">
                <div className="bg-[#D9D9D9] h-12 w-32 flex items-center justify-center">
                    <img src={gallery} alt="Logo" className="h-6 w-6" />
                </div>
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showMobileMenu ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Left Sidebar - Hidden on mobile unless toggled */}
            <div className={`${showMobileMenu ? 'block' : 'hidden'} md:block w-full md:w-1/6 bg-white flex flex-col md:h-screen sticky top-0 z-10`}>
                <div className="p-4 flex justify-center items-center hidden md:flex">
                    <div className="bg-[#D9D9D9] w-2/3 h-12 flex items-center justify-center">
                        <img src={gallery} alt="My Schedule" className="h-6 w-6" />
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="flex flex-col h-full">
                    {/* Main navigation section */}
                    <div className="flex-1 overflow-y-auto">
                        <nav className="py-2">
                            <ul className="space-y-5">
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'dashboard' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('')}
                                    onMouseEnter={() => setHoveredNavItem('dashboard')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'dashboard' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('dashboard', null)}
                                    </div>
                                    <span>Dashboard</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'schedule' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('schedule')}
                                    onMouseEnter={() => setHoveredNavItem('schedule')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'schedule' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('schedule', Calendar)}
                                    </div>
                                    <span>Schedule</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'message' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('messages')}
                                    onMouseEnter={() => setHoveredNavItem('message')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'message' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('message', sms)}
                                    </div>
                                    <span>Message</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'analytics' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('analytics')}
                                    onMouseEnter={() => setHoveredNavItem('analytics')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'analytics' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('analytics', MyChart)}
                                    </div>
                                    <span>Analytics</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'team' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('teams')}
                                    onMouseEnter={() => setHoveredNavItem('team')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'team' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('team', twoUsers)}
                                    </div>
                                    <span>Team</span>
                                </li>
                            </ul>
                        </nav>

                        <div className="border-t border-gray-200 my-4"></div>

                        <nav className="py-2">
                            <ul className="space-y-5">
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'profile' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('profile')}
                                    onMouseEnter={() => setHoveredNavItem('profile')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'profile' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('profile', user)}
                                    </div>
                                    <span className={`text-[#0D163A] font-normal ${activeNavItem === 'profile' || hoveredNavItem === 'profile' ? 'text-[#000000] font-semibold' : ''}`}>Profile</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'settings' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('settings')}
                                    onMouseEnter={() => setHoveredNavItem('settings')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'settings' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('settings', setting)}
                                    </div>
                                    <span className={`text-[#0D163A] font-normal ${activeNavItem === 'settings' || hoveredNavItem === 'settings' ? 'text-[#000000] font-semibold' : ''}`}>Settings</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="mt-auto pb-24">
                        <nav className="py-2">
                            <ul className="space-y-5">
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'help' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('help')}
                                    onMouseEnter={() => setHoveredNavItem('help')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'help' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('help', infoCircle)}
                                    </div>
                                    <span className={`${activeNavItem === 'help' || hoveredNavItem === 'help' ? 'text-[#000000] font-semibold' : ''}`}>Help</span>
                                </li>
                                <li
                                    className={`flex gap-3 items-center py-2 px-4 md:pl-16 md:-ml-10 w-full transition-colors cursor-pointer relative ${activeNavItem === 'logout' ? 'text-black font-semibold tracking-wide' : 'font-medium opacity-70 hover:opacity-100 hover:text-black'}`}
                                    onClick={() => handleNavigation('logout')}
                                    onMouseEnter={() => setHoveredNavItem('logout')}
                                    onMouseLeave={() => setHoveredNavItem(null)}
                                >
                                    {activeNavItem === 'logout' && (
                                        <span className="absolute left-0 md:left-10 top-0 h-full w-1 bg-[#4745A4]"></span>
                                    )}
                                    <div className="ml-3">
                                        {renderNavIcon('logout', logout)}
                                    </div>
                                    <span className={`${activeNavItem === 'logout' || hoveredNavItem === 'logout' ? 'text-[#000000] font-semibold' : ''}`}>Logout</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar