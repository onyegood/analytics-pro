import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(...registerables);

interface Props {
  labels: string[];
  values1: number[];
  values2: number[];
}

const MixedChart: React.FC<Props> = ({ labels, values1, values2 }) => {
  return (
    <Chart
      type="bar"
      data={{
        labels,
        datasets: [
          {
            type: 'line' as const,
            label: '',
            backgroundColor: 'transparent',
            borderColor: '#ffd027',
            borderWidth: 2,
            fill: false,
            data: values1,
          },
          {
            type: 'bar' as const,
            label: '',
            backgroundColor: '#ffd027',
            borderWidth: 0,
            barThickness: 20,
            borderRadius: 6,
            data: values2,
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
      width={300}
      height={150}
    />
  );
};

export default MixedChart;
