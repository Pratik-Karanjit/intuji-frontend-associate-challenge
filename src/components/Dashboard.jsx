import React from 'react';
import AnalyticsChart from '../Resusable Components/AnalyticsChart';
import SavingPlan from '../Resusable Components/SavingPlan';
import RecentTransaction from '../Resusable Components/RecentTransaction';
import Header from '../Resusable Components/Header';
import Overview from '../Resusable Components/Overview';
import NavBar from '../Resusable Components/NavBar';


const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 w-full min-h-screen">
            <div className="md:flex-shrink-0 z-20">
                <NavBar activeRoute='dashboard' />
            </div>

            <div className="flex-1 flex flex-col bg-[#F7F7FB] md:ml-[16.666667%]">
                {/* Top Header */}
                <Header />

                {/* Content Area */}
                <div className="flex flex-col lg:flex-row px-4 pb-4">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-2/3 xl:w-4/6">
                        {/* Overview Section */}
                        <Overview />

                        {/* Analytics Section */}
                        <AnalyticsChart />
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-1/3 xl:w-2/6 flex flex-col gap-8 lg:mr-4">
                        {/* Saving Plan Section */}
                        <SavingPlan />

                        {/* Recent Transaction Section */}
                        <RecentTransaction />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;