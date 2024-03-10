import React from 'react';
import { registerables, Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
  labels: string[];
  data: number[];
  width?: number;
  height?: number;
}

Chart.register(...registerables);

const LineChart: React.FC<Props> = ({
  data,
  labels,
  width = 280,
  height = 120,
}) => {
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
      width={width}
      height={height}
    />
  );
};

export default LineChart;
