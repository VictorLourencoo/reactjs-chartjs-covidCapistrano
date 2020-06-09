import React, { Component } from 'react';
//importação da lib de graficos chart;
import { Bar } from 'react-chartjs-2';
import './style.css';

const casos = [
  1,
  1,
  1,
  1,
  2,
  2,
  3,
  3,
  3,
  3,
  3,
  5,
  10,
  14,
  16,
  18,
  18,
  25,
  27,
  32,
  41,
  42,
  42,
  42,
  55,
  71,
  78,
  82,
  84,
  87,
  87,
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
        ],
        datasets: [
          {
            label: 'Numero de Curados',

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
    media = media / 31;
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
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Grafico de Covid-19 em Capistrano-Ceará - CURAS',
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
