import React from 'react'
import gallery from "../assets/gallery.svg";

const RecentTransaction = () => {
    return (
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
    )
}

export default RecentTransaction