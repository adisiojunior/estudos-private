import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Props, Dataset } from '../../src/interfaces/GraphInterfaces';

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

    const labels = [...formatarLabelsEixoX(filiaisUnicas), 'Total Geral'];

    return {
      labels: labels,
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

  // Renderização do componente FiliaisLine dentro do CardGrafico
  const FiliaisLine: React.FC<{ filiaisUnicas: string[] }> = ({ filiaisUnicas }) => {
    const filiaisPorSufixo: { [key: string]: string[] } = {};
    const filialGeral: string[] = [];

    filiaisUnicas.forEach(filial => {
      const match = filial.match(/^(.*?)\s*(I+)$/);
      if (match) {
        const sufixo = match[2];
        if (!filiaisPorSufixo[sufixo]) {
          filiaisPorSufixo[sufixo] = [];
        }
        filiaisPorSufixo[sufixo].push(match[1]);
      } else {
        filialGeral.push(filial);
      }
    });

    const renderFiliais = (filiais: string[], sufixo: string) => (
      <div
        style={{
          border: '1px solid #808080',
          marginLeft: '0px',
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          key={sufixo}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {filiais.map((filial, index) => (
            <div
              key={index}
              style={{
                padding: '5px',
                color: '#808080',
                marginBottom: '5px',
                flex: 'auto',
                marginLeft: '10px', 
                minWidth: '97px',
                width: '100%',
              }}
            >
              {filial}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', justifyContent: 'center', alignItems: 'center' }}>
          {sufixo ? renderReg(sufixo) : <div style={{ width: '100%', minHeight: '53px', }} />}
        </div>
      </div>
    );

    const renderReg = (sufixo: string) => (
      <div key={sufixo} style={{ fontWeight: 'bold', marginBottom: '5px' }}>Reg {sufixo}</div>
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
          maxWidth: '100%',
          marginLeft: '24px',
          marginTop: '0px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
          {Object.keys(filiaisPorSufixo).map(sufixo => (
            <React.Fragment key={sufixo}>
              {renderFiliais(filiaisPorSufixo[sufixo], sufixo)}
            </React.Fragment>
          ))}
          {filialGeral.length > 0 && (
            <div>
              {renderFiliais(filialGeral, '')}
            </div>
          )}
        </div>
      </div>
    );
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
