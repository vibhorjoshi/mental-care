import React from 'react'
import './BarChart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
let delayed = false;
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14,
                },
                color: 'rgb(255,255,255)'
            }
        }
    },
    scales: {
        y: {

            beginAtZero: true,
            grid: {
                display: false
            },
            ticks: {
                color: 'rgb(255, 255, 255)',
                font: {
                    size: 14,
                }
            }
        },
        x: {
            title: {
                display: true,
                text: 'HOURS',
                color: 'rgb(255, 255, 255)',
                font: { size: 12 }
            },
            beginAtZero: true,
            grid: {
                display: false
            },
            ticks: {
                color: 'rgb(255, 255, 255)',
                font: {
                    size: 14,
                },
                stepSize: 2
            }
        }
    }
};
const BarChart = ({ chartData }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: -30
        },
        visible: {
            transition: {
                delay: 0.8
            },
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.div
            className='barchart-container'
            variants={variants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="chart-heading">Compare Your Results!</h2>
            <Bar data={chartData} options={options} />
        </motion.div>
    )
}

export default BarChart