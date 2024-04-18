import React from 'react'

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $',
                    
                }
            ]
        })
    })
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

        }
    })


  return (
    <>
    <div>
        <Bar data={chartData} options={chartOptions} style={{width: "500px"}}
    </div>
    </>
    
  )
}
