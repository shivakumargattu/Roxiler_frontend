import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const ChartBarApp = () => {
  // Sample monthly sales data (replace with your actual data)
  const [salesData, setSalesData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40, 20, 90, 85, 60, 70], // Sample sales data
      },
    ],
  });

  return (
    <div className="chart-container">
      <Bar
        data={salesData}
        options={{
          title: {
            display: true,
            text: 'Monthly Sales',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'top',
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Sales',
              },
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
            }],
          },
        }}
      />
    </div>
  );
};

export default ChartBarApp;
