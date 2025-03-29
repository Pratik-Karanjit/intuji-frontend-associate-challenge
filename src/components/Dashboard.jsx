import React from 'react';
import { Search, Bell, MessageSquare, User, LayoutDashboard, CalendarDays, Mail, BarChart, Users, Settings, HelpCircleIcon, Info, LogOut, MoveUpRight } from 'lucide-react';
import { FaImage } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100 w-full">
            {/* Left Sidebar */}
            <div className="w-1/6 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 flex justify-center items-center">
                    <div className="bg-[#D9D9D9] w-2/3 h-12 flex items-center justify-center">
                        <FaImage className='h-8 w-5 text-slate-700' />
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
                            <li className="flex gap-3 items-center py-2 font-medium">
                                <CalendarDays size={22} />
                                <p className='text-[#0D163A] font-normal'>
                                    Schedule
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <Mail size={22} />
                                <p className='text-[#0D163A] font-normal'>
                                    Message
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <BarChart size={22} />
                                <p className='text-[#0D163A] font-normal'>

                                    Analytics
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <Users size={22} />
                                <p className='text-[#0D163A] font-normal'>

                                    Team
                                </p>
                            </li>
                        </ul>
                    </nav>

                    <div className="border-t border-gray-200 my-4"></div>

                    <nav className="px-10 py-2">
                        <ul className="space-y-5">
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <User size={22} />
                                <p className='text-[#0D163A] font-normal'>

                                    Profile
                                </p>
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <Settings size={22} />
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
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <Info size={22} />
                                Help
                            </li>
                            <li className="flex gap-3 items-center py-2 font-medium">

                                <LogOut size={22} />
                                Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-5/6 flex flex-col overflow-hidden bg-[#F7F7FB]">
                {/* Top Header */}
                <header className="p-4 flex gap-4 items-center justify-between mt-3 mx-4">
                    <div className="relative w-2/3">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-black" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-white h-14 pl-10 pr-4 rounded-full w-full border-0 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-1/3 flex items-center justify-evenly space-x-4 bg-white p-3 rounded-full">
                        <button className="px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">
                            <Bell className="h-5 w-5 text-[#0D163A]" />
                        </button>
                        <button className="px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200">

                            <MessageSquare className="h-5 w-5 text-[#0D163A]" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <FaImage className='h-10 w-4 text-slate-700' />

                            </div>
                            <span className="text-sm font-medium">Mirie Kiritani</span>
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="w-4/6 p-4 mx-4">
                    {/* Overview Section */}
                    <div className="mb-6 bg-white p-5 rounded-xl">
                        <h2 className="text-lg font-bold mb-4">Overview</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Balance Card */}
                            <div className="bg-[#4745A4] text-white p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <div className="h-6 w-6 bg-white bg-opacity-20 rounded mr-2"></div>
                                            <span>Your Balance</span>
                                        </div>
                                        <div className="text-xs">12.9% compared with last month</div>
                                    </div>
                                    <div className="text-white">→</div>
                                </div>
                                <div className="text-2xl font-bold mt-4">$28,891.138</div>
                            </div>

                            {/* Saving Card */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="flex flex-row mb-2">
                                    <div className='flex items-center border rounded-full h-10 w-10'>

                                    </div>

                                    <div>

                                    </div>

                                    <div className="flex flex-col items-start px-2 gap-1 mb-1">
                                        <span>Saving</span>
                                        <div className="text-xs flex flex-row text-gray-500">
                                            <div className='bg-[#FFAFC2] rounded-md w-4 h-4 flex items-center justify-center'>
                                                <MoveUpRight className='text-[#FE3766] h-3 w-3' />
                                            </div>
                                            <p className='pl-1'>
                                                10 % compared with last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold mt-4">$1,050.44</div>
                            </div>

                            {/* Expenses Card */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <div className="h-6 w-6 bg-yellow-100 rounded mr-2"></div>
                                            <span>Expenses</span>
                                        </div>
                                        <div className="text-xs text-gray-500">2.9% compared with last month</div>
                                    </div>
                                    <div className="text-gray-400">→</div>
                                </div>
                                <div className="text-2xl font-bold mt-4">$200.31</div>
                            </div>

                            {/* Incomes Card */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <div className="h-6 w-6 bg-blue-100 rounded mr-2"></div>
                                            <span>Incomes</span>
                                        </div>
                                        <div className="text-xs text-gray-500">8.9% compared with last month</div>
                                    </div>
                                    <div className="text-gray-400">→</div>
                                </div>
                                <div className="text-2xl font-bold mt-4">$21,121.0</div>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Section */}
                    <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Analytics</h2>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></div>
                                    <span className="text-sm">Label 1</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-yellow-400 rounded-full mr-1"></div>
                                    <span className="text-sm">Label 1</span>
                                </div>
                                <div className="relative">
                                    <select className="bg-white border border-gray-200 text-sm py-1 px-3 pr-8 rounded">
                                        <option>Weekly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="h-48 bg-gray-50">
                            {/* Chart would go here */}
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                <div className="w-72 bg-white border-l border-gray-200 p-4">
                    {/* Saving Plan Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Saving Plan</h2>
                            <a href="#" className="text-indigo-600 text-sm">See All</a>
                        </div>

                        {/* Bali Vacation */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span>Bali Vacation</span>
                                <span className="text-sm text-gray-500">Target: August 25 2022</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold">$1950.21</span>
                                <span className="text-sm text-gray-500">/$4000</span>
                                <span className="text-indigo-600 font-medium">48%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '48%' }}></div>
                            </div>
                        </div>

                        {/* New Gadget */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span>New Gadget</span>
                                <span className="text-sm text-gray-500">Target: August 25 2022</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold">$790.21</span>
                                <span className="text-sm text-gray-500">/$1000</span>
                                <span className="text-yellow-500 font-medium">79%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '79%' }}></div>
                            </div>
                        </div>

                        {/* Charity */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span>Charity</span>
                                <span className="text-sm text-gray-500">Target: August 25 2022</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold">$32.11</span>
                                <span className="text-sm text-gray-500">/$100</span>
                                <span className="text-green-500 font-medium">32%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '32%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Recent Transaction</h2>
                            <a href="#" className="text-indigo-600 text-sm">See All</a>
                        </div>

                        {/* Transaction Items */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center"></div>
                                    <div>
                                        <div>Figma</div>
                                        <div className="text-xs text-gray-500">August 20, 2022</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div>$100</div>
                                    <div className="text-xs text-green-500">Completed</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center"></div>
                                    <div>
                                        <div>Youtube</div>
                                        <div className="text-xs text-gray-500">August 20, 2022</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div>$120</div>
                                    <div className="text-xs text-green-500">Completed</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center"></div>
                                    <div>
                                        <div>Spotify</div>
                                        <div className="text-xs text-gray-500">August 20, 2022</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div>$15</div>
                                    <div className="text-xs text-green-500">Completed</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center"></div>
                                    <div>
                                        <div>Freepik</div>
                                        <div className="text-xs text-gray-500">August 20, 2022</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div>$300</div>
                                    <div className="text-xs text-green-500">Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;