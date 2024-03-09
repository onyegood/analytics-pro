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
            borderColor: '#ffd027',
            type: 'line',
            data,
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
      width={280}
      height={120}
    />
  );
};

export default LineChart;
