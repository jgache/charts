import React from 'react'

export default function BarChart() {
    const [chartDara, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets
        })
    })
    set


  return (
    <div>index</div>
  )
}
