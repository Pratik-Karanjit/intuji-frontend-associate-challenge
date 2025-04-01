import React, { useState, useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Filler);

const AnalyticsChart = () => {
    const chartRef = useRef(null);

    const [timeRange, setTimeRange] = useState("weekly"); // Default to weekly view

    // Updated data to match the UI exactly for weekly view
    const chartData = {
        daily: [7, 12, 9, 18, 6, 14, 11, 13, 8, 17, 13, 7, 15, 13, 12, 11, 10], // Scattered data for daily
        weekly: [13, 10, 14, 8, 15, 7, 20, 13, 8, 17, 13, 7, 15, 13, 12, 11, 10], // Unchanged weekly data
        monthly: [10, 16, 7, 19, 12, 14, 8, 17, 9, 15, 11, 13, 6, 18, 10, 12, 14], // Scattered data for monthly
        yearly: [15, 8, 12, 18, 10, 14, 9, 16, 11, 13, 7, 19, 6, 17, 10, 12, 14], // Scattered data for yearly
    };

    // Yellow line data (approximately 40-50% of the purple line's values)
    const yellowLineData = {
        daily: chartData.daily.map(value => value * 0.4),
        weekly: [5, 6, 7, 9, 5, 6, 6, 10, 5, 4, 5, 7, 9, 10, 8, 12, 13], // Matches the yellow line pattern
        monthly: chartData.monthly.map(value => value * 0.4),
        yearly: chartData.yearly.map(value => value * 0.4),
    };

    // Create the datasets structure
    const datasets = [
        {
            label: "Label 1",
            data: chartData[timeRange], // Purple line
            borderColor: "#8684EB",
            borderWidth: 4,
            backgroundColor: "rgba(182, 180, 230, 0.3)", // Default value until canvas gradient is applied
            fill: true,
            pointRadius: 0, // Remove points
            tension: 0.4,
        },
        {
            label: "Label 2",
            data: yellowLineData[timeRange], // Yellow line
            borderColor: "#F8CD70",
            borderWidth: 4,
            backgroundColor: "rgba(248, 205, 112, 0.2)", // Default value until canvas gradient is applied
            fill: true,
            pointRadius: 0, // Remove points
            tension: 0.4,
        },
    ];

    // Extended labels for x-axis to make the curves look smoother
    const extendedLabels = ["", "Sun", "", "Mon", "", "Tue", "", "Wed", "", "Thu", "", "Fri", "", "Sat", ""];

    const data = {
        labels: extendedLabels,
        datasets: datasets,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
            legend: {
                display: false, // Hide legend as it's custom implemented
            }
        },
        interaction: {
            intersect: false,
            mode: "nearest",
        },
        elements: {
            point: {
                radius: 0, // Remove points globally
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove vertical grid lines
                },
                ticks: {
                    font: {
                        size: 14,
                        weight: "400",
                    },
                    color: "#999999",
                    // Only show the main day labels
                    callback: function (val, index) {
                        return index % 2 === 1 ? this.getLabelForValue(val) : '';
                    }
                },
            },
            y: {
                beginAtZero: true,
                max: 20, // Match the 20k max from image
                grid: {
                    drawBorder: false,
                    color: "#E5E5E5",
                    lineWidth: 1,
                    borderDash: [5, 5], // Create dashed lines
                },
                ticks: {
                    stepSize: 5, // 5k steps as shown in the image
                    callback: (value) => value + "k",
                    font: {
                        size: 14,
                        weight: "400",
                    },
                    color: "#999999",
                },
            },
        },
    };

    // This function applies gradients to the chart
    const applyGradients = (chart) => {
        if (!chart) return;
        const ctx = chart.ctx;
        if (!ctx) return;

        const purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
        purpleGradient.addColorStop(0, "rgba(182, 180, 230, 0.3)");
        purpleGradient.addColorStop(1, "rgba(182, 180, 230, 0)");

        const yellowGradient = ctx.createLinearGradient(0, 0, 0, 400);
        yellowGradient.addColorStop(0, "rgba(248, 205, 112, 0.3)");
        yellowGradient.addColorStop(1, "rgba(248, 205, 112, 0)");

        // Apply the gradients to the datasets
        chart.data.datasets[0].backgroundColor = purpleGradient;
        chart.data.datasets[1].backgroundColor = yellowGradient;

        chart.update();
    };

    // Apply gradients when the chart renders and when timeRange changes
    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        // Create a handler for chart render events
        const handleRender = () => {
            applyGradients(chart);
        };

        chart.canvas.addEventListener('mouseenter', handleRender);
        applyGradients(chart);

        return () => {
            if (chart && chart.canvas) {
                chart.canvas.removeEventListener('mouseenter', handleRender);
            }
        };
    }, [timeRange]);

    return (
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
                        <select
                            className="bg-white border border-[#DEDEDE] text-sm py-2 px-2 pr-10 rounded-lg text-[#615f5f] appearance-none outline-none"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
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
    );
};

export default AnalyticsChart;