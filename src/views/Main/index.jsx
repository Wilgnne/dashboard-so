import React, { useState, useEffect } from 'react';

import LineChart from "../../components/LineChart";
import Table from "../../components/Table";

import { Container, Chart } from './styles';

const dataSetConfig = {
  labels: ["60s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0s"],
  datasets: [
    {
      label: 'CPU Use',
      fill: false,
      animation: true,
      steppedLine: false,
      lineTension: 0.75,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    }
  ]
}

function Main() {

  const [data, setData] = useState([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);

  useEffect(() => {

    const update = () => {
      setData((oldData) => {
        oldData.shift();
        
        return [...oldData, Math.random()*100];
      });
    };
    setInterval(update, 500);
  }, []);

  return (
    <Container>
      <Chart>
        <LineChart 
          data={(() => {
            let d = dataSetConfig;
            d.datasets[0].data = data;
            return d;
          })()}
          ymax={100}
          ymin={0}
          title="CPU"
        />
      </Chart>
      <Table />
    </Container>
  );
}

export default Main;