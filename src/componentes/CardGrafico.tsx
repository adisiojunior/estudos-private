import React from 'react';
import '../App.css';

interface Dados {
  filial: string;
  regional: string;
  atendimento: 'no prazo' | 'com atraso' | 'pendente';
}

const CardGrafico: React.FC<{ dados: Dados[] }> = ({ dados }) => {
  // Agrupando as filiais por regional, mantendo apenas uma filial de cada nome
  const agrupadoPorRegional: { [key: string]: string[] } = {};
  dados.forEach(item => {
    if (!agrupadoPorRegional[item.regional]) {
      agrupadoPorRegional[item.regional] = [];
    }
    if (!agrupadoPorRegional[item.regional].includes(item.filial)) {
      agrupadoPorRegional[item.regional].push(item.filial);
    }
  });

  // Função para calcular o total de cada tipo de atendimento para todas as filiais
  const calcularTotalGeral = () => {
    const totalGeral = {
      'no prazo': 0,
      'com atraso': 0,
      'pendente': 0
    };
    dados.forEach(item => {
      totalGeral[item.atendimento]++;
    });
    return totalGeral;
  };

  // Total geral de atendimentos
  const totalGeral = calcularTotalGeral();

  // Função para calcular a altura da barra de acordo com o valor
  const calcularAlturaBarra = (valor: number) => {
    const alturaMaxima = 200; // Altura máxima da barra
    const valorMaximo = Math.max(totalGeral['no prazo'], totalGeral['com atraso'], totalGeral['pendente']); // Valor máximo entre os tipos de atendimento
    return (valor / valorMaximo) * alturaMaxima; // Calcula a altura proporcional ao valor
  };

  // Função para calcular o total de cada tipo de atendimento para cada filial
  const calcularTotalFiliais = (filial: string) => {
    const totalFiliais = {
      'no prazo': 0,
      'com atraso': 0,
      'pendente': 0
    };
    dados.forEach(item => {
      if (item.filial === filial) {
        totalFiliais[item.atendimento]++;
      }
    });
    return totalFiliais;
  };

  // Array de escalas para o eixo Y
  const escalas = Array.from({ length: 6 }, (_, index) => (5 - index) * 20);

  return (
    <div className="chart" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {/* Eixo Y */}
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
        {escalas.map((escala, index) => (
          <div key={index} style={{ height: '20px', width: '30px', borderRight: '1px solid #ccc', marginBottom: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            {escala}
          </div>
        ))}
      </div>

      {/* Total Geral */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ backgroundColor: 'green', width: '30px', height: `${calcularAlturaBarra(totalGeral['no prazo'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              {totalGeral['no prazo']}
            </div>
            <div style={{ backgroundColor: 'red', width: '30px', height: `${calcularAlturaBarra(totalGeral['com atraso'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              {totalGeral['com atraso']}
            </div>
            <div style={{ backgroundColor: 'blue', width: '30px', height: `${calcularAlturaBarra(totalGeral['pendente'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              {totalGeral['pendente']}
            </div>
          </div>
        </div>
        <div style={{ flexGrow: 1, border: '1px solid #ccc', padding: '5px', marginBottom: '10px', position: 'relative' }}>
          <div style={{ marginBottom: '5px', textAlign: 'center' }}>Total Geral</div>
        </div>
      </div>

      {/* Agrupamento de filiais por regional */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {Object.keys(agrupadoPorRegional).map((regional, index) => (
          <div key={index} style={{ flexGrow: 1, padding: '5px', marginBottom: '10px', marginRight: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {agrupadoPorRegional[regional].map((filial, idx) => {
                const totalFiliais = calcularTotalFiliais(filial);
                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                      <div style={{ backgroundColor: 'green', width: '30px', height: `${calcularAlturaBarra(totalFiliais['no prazo'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        {totalFiliais['no prazo']}
                      </div>
                      <div style={{ backgroundColor: 'red', width: '30px', height: `${calcularAlturaBarra(totalFiliais['com atraso'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        {totalFiliais['com atraso']}
                      </div>
                      <div style={{ backgroundColor: 'blue', width: '30px', height: `${calcularAlturaBarra(totalFiliais['pendente'])}px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        {totalFiliais['pendente']}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px', border: '1px solid #ccc' }}>
              
              <div style={{ display: 'flex' }}>
                {agrupadoPorRegional[regional].map((filial, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', marginBottom: '10px', marginRight: '10px' }}>
                    <div style={{ marginBottom: '5px', textAlign: 'center', fontWeight: 'bold' }}>{filial}</div>
                  </div>
                ))}
                
              </div>
              <div style={{ marginBottom: '5px', alignItems: 'center' }}>Reg {regional}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrafico;
