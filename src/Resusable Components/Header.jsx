import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import gallery from "../assets/gallery.svg";
import messageText from "../assets/message-text.svg";
import notificationBing from "../assets/notification-bing.svg";

const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const notificationsRef = useRef(null);
    const messagesRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (messagesRef.current && !messagesRef.current.contains(event.target)) {
                setShowMessages(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowMessages(false);
        setShowProfileDropdown(false);
    };

    const toggleMessages = () => {
        setShowMessages(!showMessages);
        setShowNotifications(false);
        setShowProfileDropdown(false);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
        setShowNotifications(false);
        setShowMessages(false);
    };

    return (
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
                <div className="flex space-x-2 relative">
                    <div ref={notificationsRef} className="relative">
                        <button
                            onClick={toggleNotifications}
                            className="p-2 md:px-4 md:py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200 cursor-pointer"
                        >
                            <img src={notificationBing} alt="Notifications" className="h-5 w-5" />
                        </button>
                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                <div className="p-4">
                                    Notifications dropdown content
                                </div>
                            </div>
                        )}
                    </div>
                    <div ref={messagesRef} className="relative">
                        <button
                            onClick={toggleMessages}
                            className="p-2 md:px-4 md:py-2 rounded-full text-gray-500 hover:bg-gray-100 border border-slate-200 cursor-pointer"
                        >
                            <img src={messageText} alt="Messages" className="h-5 w-5" />
                        </button>
                        {showMessages && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                <div className="p-4">
                                    Messages dropdown content
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div ref={profileRef} className="flex items-center space-x-2 relative">
                    <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <img src={gallery} alt="Profile" className="h-5 w-5" />
                    </div>
                    <span
                        onClick={toggleProfileDropdown}
                        className="text-sm font-medium hidden md:block cursor-pointer"
                    >
                        Pratik Karanjit
                    </span>
                    <svg
                        onClick={toggleProfileDropdown}
                        className="h-5 w-5 text-gray-400 hidden md:block cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {showProfileDropdown && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                            <div className="py-1">
                                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Profile
                                </div>
                                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Settings
                                </div>
                                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Logout
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;