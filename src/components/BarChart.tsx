import React from 'react';
import { registerables, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface Props {
  labels: string[];
  data: number[];
}

Chart.register(...registerables);

const BarChart: React.FC<Props> = ({ data, labels }) => {
  return (
    <Bar
      // datasetIdKey="bar"
      data={{
        labels,
        datasets: [
          {
            label: '',
            backgroundColor: '#ffd027',
            borderWidth: 0,
            barThickness: 20,
            borderRadius: 6,
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
      width={250}
      height={120}
    />
  );
};

export default BarChart;
