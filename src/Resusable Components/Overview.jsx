import React, { useState, useEffect, useRef } from 'react';
import { MoveUpRight } from 'lucide-react';
import arrowRight from "../assets/arrow-right.svg";
import savings from "../assets/save-2.svg";
import directUp from "../assets/direct-up.svg";
import directDown from "../assets/direct-down.svg";
import arrowRightWhite from "../assets/arrow-right-white.svg";
import emptyWallet from "../assets/empty-wallet.svg";

const AnimatedNumber = ({ value, duration = 1000, decimals = 0, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const finalValue = typeof value === 'string'
            ? parseFloat(value.replace(/[^0-9.-]+/g, ''))
            : value;

        if (isNaN(finalValue)) return;

        const timer = setTimeout(() => {
            let startTime;
            let animationFrame;

            const updateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);

                const easeOutBack = percentage < 0.5
                    ? 4 * percentage * percentage * percentage
                    : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                const currentCount = easeOutBack * finalValue;
                setCount(currentCount);

                if (percentage < 1) {
                    animationFrame = requestAnimationFrame(updateCount);
                } else if (countRef.current) {
                    // Add a subtle pulse effect when animation completes
                    countRef.current.classList.add('pulse-once');
                    setTimeout(() => {
                        if (countRef.current) countRef.current.classList.remove('pulse-once');
                    }, 700);
                }
            };

            animationFrame = requestAnimationFrame(updateCount);

            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }, delay);

        return () => clearTimeout(timer);
    }, [value, duration, delay]);

    // Format the number with commas and decimals
    const formattedNumber = count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });

    return <span ref={countRef} className="animated-number">{formattedNumber}</span>;
};

const FinanceCard = ({ bgColor, borderColor, titleColor, title, icon, percentage, comparisonColor, comparisonBg, value, decimals, arrowIcon, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            if (!isHovered) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        };

        if (isHovered) {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isHovered]);

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${bgColor} p-5 rounded-2xl border ${borderColor} transition-all duration-300 finance-card`}
        >
            <div className="flex flex-row mb-2">
                <div className={`flex items-center border ${borderColor} rounded-full h-12 w-12 justify-center icon-container transition-transform duration-500`}>
                    <img src={icon} alt={title} className="object-contain" />
                </div>

                <div className="flex flex-col items-start px-2 gap-1 mb-1">
                    <span className={`font-semibold text-xl ${titleColor}`}>{title}</span>
                    <div className="text-xs mt-2 flex flex-row text-gray-500">
                        <div className={`${comparisonBg} rounded-md w-4 h-4 flex items-center justify-center`}>
                            <MoveUpRight className={`${comparisonColor} h-3 w-3`} />
                        </div>
                        <p className={`pl-1 ${titleColor === 'text-white' ? 'text-[#B5B5DB]' : 'text-[#6E7389]'}`}>
                            {percentage} % compared with last month
                        </p>
                    </div>
                </div>
            </div>
            <hr className={`${titleColor === 'text-white' ? 'text-[#CFD0D8]' : 'text-[#0D163A]'} px-5 my-4 ${titleColor === 'text-white' ? 'opacity-30' : 'opacity-20'}`} />

            <div className='flex flex-row justify-between items-end'>
                <div className={`${titleColor} font-semibold mt-2 number-container`} style={{ letterSpacing: "-2px", fontSize: "28px" }}>
                    $<AnimatedNumber value={value} decimals={decimals} duration={1500} delay={delay} />
                </div>
                <img src={arrowIcon} alt="Right arrow" className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'arrow-hover' : ''}`} />
            </div>
        </div>
    );
};

const Overview = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .animated-number {
                display: inline-block;
                position: relative;
            }
            
            .pulse-once {
                animation: pulse-effect 0.7s ease-out;
            }
            
            @keyframes pulse-effect {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
           
            
            .finance-card:hover {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            }
            
            .finance-card:hover .icon-container {
                transform: translateZ(15px) rotate(10deg);
            }
            
            .finance-card:hover .number-container {
                transform: translateZ(20px);
            }
            
            .arrow-hover {
                transform: translateX(5px);
            }
            
            .bg-gradient-purple {
                background: linear-gradient(135deg, #4745A4 0%, #5957b5 100%);
                background-size: 200% 200%;
                animation: gradientShift 15s ease infinite;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const overviewRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (overviewRef.current) {
            observer.observe(overviewRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={overviewRef}
            className={`bg-white p-5 mb-8 lg:mr-8 rounded-xl lg:ml-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="text-xl font-bold mb-4 relative">
                Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Balance Card */}
                <FinanceCard
                    bgColor="bg-gradient-purple"
                    borderColor="border-[#6564DB]"
                    titleColor="text-white"
                    title="Your Balance"
                    icon={emptyWallet}
                    percentage="15"
                    comparisonColor="text-[#31D3A3]"
                    comparisonBg="bg-[#3E7EA4]"
                    value={28891.138}
                    decimals={3}
                    arrowIcon={arrowRightWhite}
                    delay={0}
                />

                {/* Saving Card */}
                <FinanceCard
                    bgColor="bg-white"
                    borderColor="border-[#EEEEEE]"
                    titleColor=""
                    title="Saving"
                    icon={savings}
                    percentage="10"
                    comparisonColor="text-[#FE3766]"
                    comparisonBg="bg-[#FFAFC2]"
                    value={1050.44}
                    decimals={2}
                    arrowIcon={arrowRight}
                    delay={100}
                />

                {/* Expenses Card */}
                <FinanceCard
                    bgColor="bg-white"
                    borderColor="border-[#EEEEEE]"
                    titleColor=""
                    title="Expenses"
                    icon={directUp}
                    percentage="2"
                    comparisonColor="text-[#F9BA33]"
                    comparisonBg="bg-[#FCE3AD]"
                    value={200.31}
                    decimals={2}
                    arrowIcon={arrowRight}
                    delay={200}
                />

                {/* Incomes Card */}
                <FinanceCard
                    bgColor="bg-white"
                    borderColor="border-[#EEEEEE]"
                    titleColor=""
                    title="Incomes"
                    icon={directDown}
                    percentage="8"
                    comparisonColor="text-[#1775E4]"
                    comparisonBg="bg-[#A2C8F3]"
                    value={21121.0}
                    decimals={1}
                    arrowIcon={arrowRight}
                    delay={300}
                />
            </div>
        </div>
    )
}

export default Overview