import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Props, Dataset } from '../../src/interfaces/GraphInterfaces';
import FiliaisLine from './LiliaisLine';

const CardGrafico: React.FC<Props> = ({ dados, filtroRegional, filtroFilial }) => {

  const formatarLabelsEixoX = (filiaisUnicas: string[]) => {
    return filiaisUnicas.map(filial => {
      const match = filial.match(/^(.*?)\s*\(([^)]+)\)$/);
      if (match) {
        const nomeFilial = match[1];
        const regional = match[2];
        return `${nomeFilial} ${regional}`;
      } else {
        return filial;
      }
    });
  };


  const prepararDadosGrafico = () => {
    const datasets: Dataset[] = [
      { label: 'com atraso', backgroundColor: 'blue', data: [] },
      { label: 'no prazo', backgroundColor: 'green', data: [] },
      { label: 'pendente', backgroundColor: 'red', data: [] }
    ];

    let totalGeralAtraso = 0;
    let totalGeralNoPrazo = 0;
    let totalGeralPendente = 0;

    let dadosFiltrados = dados;
    if (filtroRegional) {
      dadosFiltrados = dadosFiltrados.filter(item => item.regional === filtroRegional);
    }
    if (filtroFilial) {
      dadosFiltrados = dadosFiltrados.filter(item => item.filial === filtroFilial);
    }

    const filiaisComRegional = dadosFiltrados.map(item => `${item.filial} (${item.regional})`);

    const filiaisUnicas: string[] = Array.from(new Set(filiaisComRegional));

    filiaisUnicas.sort((a, b) => {
      const matchA = a.match(/\(([^)]+)\)$/);
      const matchB = b.match(/\(([^)]+)\)$/);
      
      const regionalA = matchA ? matchA[1] : ''; 
      const regionalB = matchB ? matchB[1] : ''; 
      
      const regionalNumericaA = regionalA === 'I' ? 1 : regionalA === 'II' ? 2 : 3;
      const regionalNumericaB = regionalB === 'I' ? 1 : regionalB === 'II' ? 2 : 3;
    
      return regionalNumericaA - regionalNumericaB;
    });

    filiaisUnicas.forEach(filial => {
      let atrasoCount = 0;
      let noPrazoCount = 0;
      let pendenteCount = 0;

      const dadosFilial = dadosFiltrados.filter(item => `${item.filial} (${item.regional})` === filial);

      dadosFilial.forEach(item => {
        if (item.atendimento === 'com atraso') {
          atrasoCount++;
          totalGeralAtraso++;
        } else if (item.atendimento === 'no prazo') {
          noPrazoCount++;
          totalGeralNoPrazo++;
        } else if (item.atendimento === 'pendente') {
          pendenteCount++;
          totalGeralPendente++;
        }
      });

      datasets[0].data.push(atrasoCount);
      datasets[1].data.push(noPrazoCount);
      datasets[2].data.push(pendenteCount);
    });

    datasets[0].data.push(totalGeralAtraso);
    datasets[1].data.push(totalGeralNoPrazo);
    datasets[2].data.push(totalGeralPendente);

    return {
      labels: [...formatarLabelsEixoX(filiaisUnicas), 'Total Geral'], 
      datasets: datasets
    };
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false,
        beginAtZero: true,
        suggestedMin: 0, 
        suggestedMax: 10,
        display: false,

      },
      y: {
        stacked: false,
        stepSize: 1 
      }
    },
    plugins: {
      legend: {
        position: 'right' as const 
      },
    }
  };

  return (
    <div>
      <h2>Gráfico de Barras</h2>
      <div style={{ height: '400px', width: '1200px' }}>
        <Bar
          id="chart"
          data={prepararDadosGrafico()}
          options={options}
        />
      </div>
      <FiliaisLine filiaisUnicas={prepararDadosGrafico().labels} />


    </div>
  );
};

export default CardGrafico;