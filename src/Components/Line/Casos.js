import React, { Component } from 'react';
//importação da lib de graficos chart;
import { Line } from 'react-chartjs-2';
import './style.css';

const casos = [
  5,
  5,
  5,
  7,
  8,
  11,
  13,
  16,
  21,
  26,
  30,
  34,
  35,
  41,
  48,
  53,
  58,
  70,
  79,
  84,
  97,
  110,
  113,
  114,
  121,
  124,
  135,
  143,
  153,
  158,
  161,
];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Media: 0,
      Varianca: 0,
      Desvio: 0,
      chartData: {
        labels: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
        ],
        datasets: [
          {
            label: 'Numero de Casos',

            data: casos,
            backgroundColor: '#000',

            borderWidth: 1,
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    titlePosition: 'left',
    legendPosition: 'right',
  };

  DesvioPadrao = () => {
    var numCasos = 161;

    var media = numCasos / 31;
    media = Math.round(media);
    this.setState({ Media: media });
    var varianca = 0;
    for (var j = 0; j < 31; j++) {
      varianca += (media - casos[j]) * (media - casos[j]);
    }
    varianca = varianca / 31;
    varianca = Math.round(varianca);
    this.setState({ Varianca: varianca });

    varianca = Math.sqrt(varianca);
    varianca = Math.round(varianca);

    this.setState({ Desvio: varianca });
  };
  render() {
    return (
      <div
        ClassName="App"
        style={{
          display: 'flex',

          width: 900,
          height: 600,
        }}
      >
        <h2>Grafico Relacionado ao mês de maio</h2>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Grafico de Covid-19 em Capistrano-Ceará',
              fontSize: 23,
              fontColor: '#000',
              position: this.props.titlePosition,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              fontColor: '#000',
            },
            label: {
              fontSize: 23,
            },
            maintainAspectRatio: false,
          }}
        />
        <ul>
          <li>
            <h1>Desvio: {this.state.Desvio} </h1>
          </li>
          <li>
            <h1>Media: {this.state.Media} </h1>
          </li>
          <li>
            <h1>Variação: {this.state.Varianca}</h1>
          </li>
        </ul>
        <button className="button" type="button" onClick={this.DesvioPadrao}>
          Estatísticas
        </button>
      </div>
    );
  }
}

export default Chart;
