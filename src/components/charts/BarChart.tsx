import React from 'react';
import { registerables, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface Props {
  labels: string[];
  data: number[];
  width?: number;
  height?: number;
}

Chart.register(...registerables);

const BarChart: React.FC<Props> = ({
  data,
  labels,
  width = 250,
  height = 120,
}) => {
  return (
    <Bar
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
      width={width}
      height={height}
    />
  );
};

export default BarChart;
