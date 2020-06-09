/*import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        labels: [1, 4, 5, 6, 7, 9],
        datasets: [
          {
            label: 'videos mades',
            backgroundColor: 'rgba(255,0,255, 0.75)',
            Data: [4, 7, 8, 5, 9, 0],
          },
          {
            label: 'subscriptions',
            backgroundColor: 'rgba(255,0,255, 0.75)',
            Data: [1, 3, 40, 7, 5, 4],
          },
        ],
      },
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, 'rgba(133,122,144, 0.5)');
    return gradient;
  };

  getChartData = (canvas) => {
    const Data = this.state.Data;

    if (Data.datasets) {
      let colors = ['rgba(255,0,255, 0.75)'];
      Data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = 'white';
        set.borderWidth = 2;
      });
    }
    return Data;
  };

  render() {
    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>
        <h3>chart Simplex</h3>
        <Line
          options={{
            responsive: true,
          }}
          Data={this.getChartData}
        />
      </div>
    );
  }
}
*/
