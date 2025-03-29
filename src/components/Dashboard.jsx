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
import { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Filler);



const Dashboard = () => {


    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current?.ctx;
        if (!ctx) return;

        const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(0, "rgba(75, 123, 255, 0.5)");
        gradient1.addColorStop(1, "rgba(75, 123, 255, 0)");

        const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient2.addColorStop(0, "rgba(255, 193, 7, 0.5)");
        gradient2.addColorStop(1, "rgba(255, 193, 7, 0)");

        chartRef.current.data.datasets[0].backgroundColor = gradient1;
        chartRef.current.data.datasets[1].backgroundColor = gradient2;
        chartRef.current.update();
    }, []);

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Dataset 1",
                data: [10, 5, 90, 20, 90, 30, 40],
                borderColor: "blue",
                borderWidth: 2,
                backgroundColor: "rgba(75, 123, 255, 0.2)", // Placeholder until gradient loads
                fill: true,
                pointRadius: 0,
                tension: 0.4,
            },
            {
                label: "Dataset 2",
                data: [70, 60, 50, 40, 30, 20, 10],
                borderColor: "yellow",
                borderWidth: 2,
                backgroundColor: "rgba(255, 193, 7, 0.2)", // Placeholder until gradient loads
                fill: true,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Analytics Chart",
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
                radius: 0, // Removes nodes
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


    return (
        <div className="flex bg-gray-100 w-full">
            {/* Left Sidebar */}
            <div className="w-1/6 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 flex justify-center items-center">
                    <div className="bg-[#D9D9D9] w-2/3 h-12 flex items-center justify-center">
                        <img src={gallery} alt="My Schedule" className="h-6 w-6" />
                    </div>
                </div>

                {/* Main Navigation */}
                <div>
                    <nav className="px-10 py-2">
                        <ul className="space-y-5">
                            <li className="flex gap-3 items-center py-2 text-black font-semibold tracking-wide">
                                <LayoutDashboard size={22} fill='#F9BA33' className="text-[#F9BA33]" />
                                Dashboard
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={Calendar} alt="Schedule" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Schedule
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={sms} alt="Message Icon" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Message
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={MyChart} alt="My Schedule" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Analytics
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={twoUsers} alt="My Schedule" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Team
                                </p>
                            </li>
                        </ul>
                    </nav>

                    <div className="border-t border-gray-200 my-4"></div>

                    <nav className="px-10 py-2">
                        <ul className="space-y-5">
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={user} alt="My Schedule" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Profile
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={setting} alt="My Schedule" className="h-6 w-6" />
                                <p className='text-[#0D163A] font-normal'>
                                    Settings
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-auto">
                    <nav className="px-10 py-2">
                        <ul className="space-y-5 mb-4">
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={infoCircle} alt="My Schedule" className="h-6 w-6" />
                                Help
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium opacity-70">
                                <img src={logout} alt="My Schedule" className="h-6 w-6" />
                                Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-5/6 flex flex-col bg-[#F7F7FB]">
                {/* Top Header */}
                <header className="p-4 flex gap-4 items-center justify-between mt-3 mx-4">
                    <div className="relative w-2/3">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-black" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-white h-14 pl-10 pr-4 rounded-full w-full border-0 outline-none"
                        />
                    </div>
                    <div className="w-1/3 flex items-center justify-evenly space-x-4 bg-white p-3 rounded-full">
                        <button className="px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">
                            <img src={notificationBing} alt="My Schedule" className="h-5 w-5" />
                        </button>
                        <button className="px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">
                            <img src={messageText} alt="My Schedule" className="h-5 w-5" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <img src={gallery} alt="My Schedule" className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium">Pratik Karanjit</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </header>

                {/* Content Area - Now with flex layout for main content and right sidebar */}
                <div className="flex mx-4">
                    {/* Main Content Area - 4/6 width */}
                    <div className="w-4/6 pr-4">
                        {/* Overview Section */}
                        <div className="mb-6 bg-white p-5 rounded-xl">
                            <h2 className="text-lg font-bold mb-4">Overview</h2>
                            <div className="grid grid-cols-2 gap-4">
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
                        <div className="mb-6 bg-white p-5 rounded-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Analytics</h2>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></div>
                                        <span className="text-sm">Dataset 1</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-yellow-400 rounded-full mr-1"></div>
                                        <span className="text-sm">Dataset 2</span>
                                    </div>
                                    <div className="relative">
                                        <select className="bg-white border border-gray-200 text-sm py-1 px-3 pr-8 rounded">
                                            <option>Weekly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-50 rounded-lg p-4">
                                <Line ref={chartRef} data={data} options={options} />
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - 2/6 width */}
                    <div className="w-2/6">
                        {/* Saving Plan Section */}
                        <div className="mb-6 bg-white p-5 rounded-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Saving Plan</h2>
                                <a href="#" className="text-sm font-medium text-[#4745A4]">See All</a>
                            </div>
                            <hr className='text-[#CFD0D8] px-5 my-5' />

                            <div className="space-y-7">
                                {/* Bali Vacation Saving */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">Bali Vacation</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-1">
                                        <div>
                                            <span className="font-semibold text-xl">$1950.21</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$4000</span>
                                        </div>
                                        <span className="text-sm font-medium text-[#4745A4]">48%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#4745A4] h-2 rounded-full" style={{ width: '48%' }}></div>
                                    </div>
                                </div>

                                {/* New Gadget Saving */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">New Gadget</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-1">
                                        <div>
                                            <span className="font-semibold text-xl">$790.21</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$1000</span>
                                        </div>
                                        <span className="text-sm font-medium text-[#F9BA33]">79%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#F9BA33] h-2 rounded-full" style={{ width: '79%' }}></div>
                                    </div>
                                </div>

                                {/* Charity Saving */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">Charity</span>
                                        <span className="text-xs text-[#6E7389]">Target: August 25, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-1">
                                        <div>
                                            <span className="font-semibold text-xl">$32.11</span>
                                            <span className="font-semibold text-[#868A9C] text-xs">/$100</span>
                                        </div>
                                        <span className="text-sm font-medium text-[#3BBB6E]">32%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#3BBB6E] h-2 rounded-full" style={{ width: '32%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transaction Section */}
                        <div className="mb-6 bg-white p-5 rounded-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Recent Transaction</h2>
                                <a href="#" className="text-sm text-indigo-600">See All</a>
                            </div>
                            <div className="space-y-4">
                                {/* Figma Transaction */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <img src={gallery} alt="Figma" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Figma</div>
                                            <div className="text-xs text-gray-500">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-medium text-right">$100</div>
                                        <div className="text-xs text-green-500 text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Youtube Transaction */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <img src={gallery} alt="Youtube" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Youtube</div>
                                            <div className="text-xs text-gray-500">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-medium text-right">$120</div>
                                        <div className="text-xs text-green-500 text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Spotify Transaction */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <img src={gallery} alt="Spotify" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Spotify</div>
                                            <div className="text-xs text-gray-500">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-medium text-right">$15</div>
                                        <div className="text-xs text-green-500 text-right">Completed</div>
                                    </div>
                                </div>

                                {/* Freepik Transaction */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <img src={gallery} alt="Freepik" className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Freepik</div>
                                            <div className="text-xs text-gray-500">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-medium text-right">$300</div>
                                        <div className="text-xs text-green-500 text-right">Completed</div>
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