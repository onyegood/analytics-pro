import React from 'react';
import { registerables, Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
  labels: string[];
  data: number[];
}

Chart.register(...registerables);

const LineChart: React.FC<Props> = ({ data, labels }) => {
  return (
    <Line
      datasetIdKey="line"
      data={{
        labels,

        datasets: [
          {
            label: '',
            fill: false,
            backgroundColor: 'transparent',
            borderColor: '#ffd027', // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffd027',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: '#ffd027',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data,
            spanGaps: true,
            type: 'line',
          },
        ],
      }}
      options={{
        responsive: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      width={400}
      height={120}
    />
  );
};

export default LineChart;
