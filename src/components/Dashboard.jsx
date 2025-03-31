import React from 'react';
import { Search, Bell, MessageSquare, User, LayoutDashboard, CalendarDays, Mail, BarChart, Users, Settings, HelpCircleIcon, Info, LogOut, MoveUpRight } from 'lucide-react';
import { FaImage } from 'react-icons/fa';
import Calendar from "../assets/Calendar.svg";
import sms from "../assets/sms.svg";
import MyChart from "../assets/Chart.svg";
import twoUsers from "../assets/twoUsers.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import infoCircle from "../assets/info-circle.svg";
import logout from "../assets/login.svg";
import gallery from "../assets/gallery.svg";
import messageText from "../assets/message-text.svg";
import notificationBing from "../assets/notification-bing.svg";
import arrowRight from "../assets/arrow-right.svg";
import savings from "../assets/save-2.svg";
import directUp from "../assets/direct-up.svg";
import directDown from "../assets/direct-down.svg";
import arrowRightWhite from "../assets/arrow-right-white.svg";
import emptyWallet from "../assets/empty-wallet.svg";
import { useEffect, useRef, useState } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Filler);

const Dashboard = () => {
    const [activeNavItem, setActiveNavItem] = useState('dashboard');
    const [hoveredNavItem, setHoveredNavItem] = useState(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        setActiveNavItem(route);
        navigate(`/${route}`);
        setShowMobileMenu(false); // Close mobile menu on navigation
    };

    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const ctx = chart.ctx;
        const purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
        purpleGradient.addColorStop(0, "rgba(182, 180, 230, 0.3)");
        purpleGradient.addColorStop(1, "rgba(182, 180, 230, 0)");

        const yellowGradient = ctx.createLinearGradient(0, 0, 0, 400);
        yellowGradient.addColorStop(0, "#F8CD70");
        yellowGradient.addColorStop(1, "rgba(248, 205, 112, 0)");

        chart.data.datasets[0].backgroundColor = purpleGradient;
        chart.data.datasets[1].backgroundColor = yellowGradient;
        chart.update();
    }, []);

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Dataset 1",
                data: [10, 5, 90, 20, 90, 30, 40],
                borderColor: "#8684EB",
                borderWidth: 4,
                backgroundColor: "rgba(71, 69, 164, 0.2)",
                fill: true,
                pointRadius: 0,
                tension: 0.4,
            },
            {
                label: "Dataset 2",
                data: [30, 32, 35, 30, 33, 40, 31, 32, 30],
                borderColor: "#F8CD70",
                borderWidth: 4,
                backgroundColor: "rgba(248, 205, 112, 0.2)",
                fill: true,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        interaction: {
            intersect: false,
            mode: "nearest",
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => value + "k",
                },
            },
        },
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
        <div className="flex flex-col md:flex-row bg-gray-100 w-full min-h-screen">
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F7F7FB]">
                {/* Top Header */}
                <header className="sm:hidden sm:px-4 lg:px-0 lg:flex flex-col md:flex-row items-center justify-between md:m-8">
                    <div className="relative md:w-2/3 lg:pr-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-black" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-white h-14 pl-10 pr-4 rounded-full w-full border-0 outline-none"
                        />
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-between md:justify-evenly space-x-4 bg-white p-3 rounded-full">
                        <div className="flex space-x-2">
                            <button className="p-2 md:px-4 md:py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">
                                <img src={notificationBing} alt="Notifications" className="h-5 w-5" />
                            </button>
                            <button className="p-2 md:px-4 md:py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">
                                <img src={messageText} alt="Messages" className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <img src={gallery} alt="Profile" className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium hidden md:block">Pratik Karanjit</span>
                            <svg className="h-5 w-5 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex flex-col lg:flex-row px-4 pb-4">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-2/3 xl:w-4/6">
                        {/* Overview Section */}
                        <div className="bg-white p-5 mb-8 lg:mr-8 rounded-xl lg:ml-4">
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Balance Card */}
                                <div className="bg-[#4745A4] p-5 rounded-2xl border border-[#DEDEDEB2]">
                                    <div className="flex flex-row mb-2">
                                        <div className='flex items-center border border-[#6564DB] rounded-full h-12 w-12 justify-center'>
                                            <img src={emptyWallet} alt="Saving" className="object-contain" />
                                        </div>

                                        <div className="flex flex-col items-start px-2 gap-1 mb-1">
                                            <span className='font-semibold text-xl text-white'>Your Balance</span>
                                            <div className="text-xs mt-2 flex flex-row text-gray-500">
                                                <div className='bg-[#3E7EA4] rounded-md w-4 h-4 flex items-center justify-center'>
                                                    <MoveUpRight className='text-[#31D3A3] h-3 w-3' />
                                                </div>
                                                <p className='pl-1 text-[#B5B5DB]'>
                                                    15 % compared with last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-[#CFD0D8] px-5 my-4 opacity-30' />
                                    <div className='flex flex-row justify-between items-end'>
                                        <div className="font-semibold text-white mt-2" style={{ letterSpacing: "-2px", fontSize: "28px" }}>$28,891.138</div>
                                        <img src={arrowRightWhite} alt="Right arrow" className="h-5 w-5 text-white" />
                                    </div>
                                </div>

                                {/* Saving Card */}
                                <div className="bg-white p-5 rounded-2xl border border-[#DEDEDEB2]">
                                    <div className="flex flex-row mb-2">
                                        <div className='flex items-center border border-[#EEEEEE] rounded-full h-12 w-12 justify-center'>
                                            <img src={savings} alt="Saving" className="object-contain" />
                                        </div>

                                        <div className="flex flex-col items-start px-2 gap-1 mb-1">
                                            <span className='font-semibold text-xl'>Saving</span>
                                            <div className="text-xs mt-2 flex flex-row text-gray-500">
                                                <div className='bg-[#FFAFC2] rounded-md w-4 h-4 flex items-center justify-center'>
                                                    <MoveUpRight className='text-[#FE3766] h-3 w-3' />
                                                </div>
                                                <p className='pl-1 text-[#6E7389]'>
                                                    10 % compared with last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-[#0D163A] px-5 my-4 opacity-20' />

                                    <div className='flex flex-row justify-between items-end'>
                                        <div className="text-2xl font-semibold mt-2" style={{ letterSpacing: "-2px", fontSize: "28px" }}>$1,050.44</div>
                                        <img src={arrowRight} alt="Right arrow" className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Expenses Card */}
                                <div className="bg-white p-5 rounded-2xl border border-[#DEDEDEB2]">
                                    <div className="flex flex-row mb-2">
                                        <div className='flex items-center border border-[#EEEEEE] rounded-full h-12 w-12 justify-center'>
                                            <img src={directUp} alt="Saving" className="object-contain" />
                                        </div>

                                        <div className="flex flex-col items-start px-2 gap-1 mb-1">
                                            <span className='font-semibold text-xl'>Expenses</span>
                                            <div className="text-xs mt-2 flex flex-row text-gray-500">
                                                <div className='bg-[#FCE3AD] rounded-md w-4 h-4 flex items-center justify-center'>
                                                    <MoveUpRight className='text-[#F9BA33] h-3 w-3' />
                                                </div>
                                                <p className='pl-1 text-[#6E7389]'>
                                                    2 % compared with last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-[#0D163A] px-5 my-4 opacity-20' />

                                    <div className='flex flex-row justify-between items-end'>
                                        <div className="text-2xl font-semibold mt-2" style={{ letterSpacing: "-2px", fontSize: "28px" }}>$200.31</div>
                                        <img src={arrowRight} alt="Right arrow" className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Incomes Card */}
                                <div className="bg-white p-5 rounded-2xl border border-[#DEDEDEB2]">
                                    <div className="flex flex-row mb-2">
                                        <div className='flex items-center border border-[#EEEEEE] rounded-full h-12 w-12 justify-center'>
                                            <img src={directDown} alt="Saving" className="object-contain" />
                                        </div>

                                        <div className="flex flex-col items-start px-2 gap-1 mb-1">
                                            <span className='font-semibold text-xl'>Incomes</span>
                                            <div className="text-xs mt-2 flex flex-row text-gray-500">
                                                <div className='bg-[#A2C8F3] rounded-md w-4 h-4 flex items-center justify-center'>
                                                    <MoveUpRight className='text-[#1775E4] h-3 w-3' />
                                                </div>
                                                <p className='pl-1 text-[#6E7389]'>
                                                    8 % compared with last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-[#0D163A] px-5 my-4 opacity-20' />

                                    <div className='flex flex-row justify-between items-end'>
                                        <div className="text-2xl font-semibold mt-2" style={{ letterSpacing: "-2px", fontSize: "28px" }}>$21,121.0</div>
                                        <img src={arrowRight} alt="Right arrow" className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Section */}
                        <div className="mb-6 bg-white p-5 rounded-xl lg:ml-4 lg:mr-8">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                                <h2 className="text-xl font-bold">Analytics</h2>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></div>
                                        <span className="text-sm">Label 1</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-yellow-400 rounded-full mr-1"></div>
                                        <span className="text-sm">Label 2</span>
                                    </div>
                                    <div className="relative">
                                        <select className="bg-white border border-[#DEDEDE] text-sm py-2 px-2 pr-10 rounded-lg text-[#615f5f] appearance-none outline-none">
                                            <option className="">Weekly</option>
                                            <option className="">Monthly</option>
                                            <option className="">Yearly</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-[#615f5f]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-50 rounded-lg p-4 xl:h-96 lg:h-64 sm:h-64">
                                <Line ref={chartRef} data={data} options={options} />
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-1/3 xl:w-2/6 flex flex-col gap-8 lg:mr-4">
                        {/* Saving Plan Section */}
                        <div className="bg-white p-5 rounded-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Saving Plan</h2>
                                <a href="#" className="text-base font-medium text-[#4745A4]">See All</a>
                            </div>
                            <hr className='text-[#CFD0D8] px-5 mt-6 mb-7' />

                            <div className="space-y-7">
                                {/* Bali Vacation Saving */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-medium">Bali Vacation</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <span className="font-semibold text-xl">$1950,21</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$4000</span>
                                        </div>
                                        <span className="text-lg font-medium text-[#4745A4]">48%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#4745A4] h-2 rounded-full" style={{ width: '48%' }}></div>
                                    </div>
                                </div>

                                {/* New Gadget Saving */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-medium">New Gadget</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <span className="font-semibold text-xl">$790,21</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$1000</span>
                                        </div>
                                        <span className="text-lg font-medium text-[#F9BA33]">79%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#F9BA33] h-2 rounded-full" style={{ width: '79%' }}></div>
                                    </div>
                                </div>

                                {/* Charity Saving */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-medium">Charity</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <span className="font-semibold text-xl">$32,111</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$100</span>
                                        </div>
                                        <span className="text-lg font-medium text-[#3BBB6E]">32%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#3BBB6E] h-2 rounded-full" style={{ width: '32%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transaction Section */}
                        <div className="bg-white p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Recent Transaction</h2>
                                <a href="#" className="text-base font-medium text-[#4745A4]">See All</a>
                            </div>
                            <hr className='text-[#CFD0D8] px-5 my-6' />

                            <div className="space-y-4 pb-4">
                                {/* Figma Transaction */}
                                <div className="flex items-center justify-between pb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-12 w-12 bg-[#CCCCCC] rounded-full flex items-center justify-center">
                                            <img src={gallery} alt="Figma" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">Figma</div>
                                            <div className="text-xs text-[#0D163A] opacity-50 font-semibold">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-col'>
                                        <div className="font-semibold text-right text-lg">$100</div>
                                        <div className="text-xs text-[#3BBB6E] font-semibold text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Youtube Transaction */}
                                <div className="flex items-center justify-between pb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-12 w-12 bg-[#CCCCCC] rounded-full flex items-center justify-center">
                                            <img src={gallery} alt="Youtube" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">Youtube</div>
                                            <div className="text-xs text-[#0D163A] opacity-50 font-semibold">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-col'>
                                        <div className="font-semibold text-right text-lg">$120</div>
                                        <div className="text-xs text-[#3BBB6E] font-semibold text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Spotify Transaction */}
                                <div className="flex items-center justify-between pb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-12 w-12 bg-[#CCCCCC] rounded-full flex items-center justify-center">
                                            <img src={gallery} alt="Spotify" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">Spotify</div>
                                            <div className="text-xs text-[#0D163A] opacity-50 font-semibold">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-col'>
                                        <div className="font-semibold text-right text-lg">$15</div>
                                        <div className="text-xs text-[#3BBB6E] font-semibold text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Freepik Transaction */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-12 w-12 bg-[#CCCCCC] rounded-full flex items-center justify-center">
                                            <img src={gallery} alt="Freepik" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">Freepik</div>
                                            <div className="text-xs text-[#0D163A] opacity-50 font-semibold">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-col'>
                                        <div className="font-semibold text-right text-lg">$300</div>
                                        <div className="text-xs text-[#3BBB6E] font-semibold text-right">Completed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;