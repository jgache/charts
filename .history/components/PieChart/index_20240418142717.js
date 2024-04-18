import { Pie } from "react-chartjs-2"
import styles from './Barchart.module.css'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Bllue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# Sales $',
                    data: [10,6,15,20,12,4],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true

            }
        })

    })



  return (
    <>
    <div>
        <Bar data={chartData} options={chartOptions} style={{width: "500px" , height: "300px"}}/>
    </div>
    </>
    
  )
}
