import React from 'react'

const SavingPlan = () => {
    return (
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
    )
}

export default SavingPlan