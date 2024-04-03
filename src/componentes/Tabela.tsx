import React from 'react';
import './Tabela.css';

const dados = [
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 0,
    "data_coleta": "23/01/2024",
    "atendimento": "no prazo"
  },
  {
    "regional": "I",
    "filial": "SÃO",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 0,
    "data_coleta": "24/01/2024",
    "atendimento": "no prazo"
  },
  {
    "regional": "I",
    "filial": "BRB",
    "equipamento": "25201",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": null,
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "BRB",
    "equipamento": "25201",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": null,
    "atendimento": "pendente"
  },
  {
    "regional": "II",
    "filial": "TTR",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 32,
    "data_coleta": null,
    "atendimento": "pendente"
  },
  {
    "regional": "II",
    "filial": "TTR",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 32,
    "data_coleta": null,
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25203",
    "imposicao": "25/01/2024",
    "dias_sem_coletas": 33,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "REC",
    "equipamento": "25204",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": "36/01/2024",
    "data_coleta": null,
    "atendimento": "com atraso"
  },
  {
    "regional": "III",
    "filial": "ADD",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "III",
    "filial": "ADD",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": "26/02/2024",
    "atendimento": "pendente"
  },
  {
    "regional": "I",
    "filial": "SÃO",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 32,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25203",
    "imposicao": "25/01/2024",
    "dias_sem_coletas": 33,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "SSW",
    "equipamento": "25202",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 34,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "SSW",
    "equipamento": "25202",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 34,
    "data_coleta": "26/02/2024",
    "atendimento": "pendente"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "SSW",
    "equipamento": "25204",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 34,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "TTR",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 32,
    "data_coleta": null,
    "atendimento": "pendente"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25201",
    "imposicao": "25/01/2024",
    "dias_sem_coletas": 0,
    "data_coleta": "25/01/2024",
    "atendimento": "no prazo"
  },
  {
    "regional": "I",
    "filial": "FFF",
    "equipamento": "25204",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 34,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "FFF",
    "equipamento": "25204",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 34,
    "data_coleta": "26/02/2024",
    "atendimento": "pendente"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25201",
    "imposicao": "23/01/2024",
    "dias_sem_coletas": 31,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "I",
    "filial": "SÃO",
    "equipamento": "25202",
    "imposicao": "24/01/2024",
    "dias_sem_coletas": 32,
    "data_coleta": null,
    "atendimento": "pendente"
  },
  {
    "regional": "I",
    "filial": "MAO",
    "equipamento": "25203",
    "imposicao": "25/01/2024",
    "dias_sem_coletas": 33,
    "data_coleta": "26/02/2024",
    "atendimento": "com atraso"
  },
  {
    "regional": "II",
    "filial": "REC",
    "equipamento": "25204",
    "imposicao": "26/01/2024",
    "dias_sem_coletas": 0,
    "data_coleta": "26/01/2024",
    "atendimento": "no prazo"
  }
];

function Tabela() {
  const regionais = [...new Set(dados.map(item => item.regional))];
  const filiaisPorRegional = regionais.map(regional => {
    const uniqueFiliais = [...new Set(dados.filter(item => item.regional === regional).map(item => item.filial))];
    return {
      regional,
      filiais: uniqueFiliais
    };
  });

  const totalPorRegional = filiaisPorRegional.map(regional => {
    return regional.filiais.reduce((acc, filial) => {
      const dadosFiltrados = dados.filter(item => item.filial === filial);
      dadosFiltrados.forEach(item => {
        if (item.atendimento === "no prazo") {
          acc.noPrazo++;
        } else if (item.atendimento === "com atraso") {
          acc.comAtraso++;
        } else if (item.atendimento === "pendente") {
          acc.pendente++;
        }
      });
      return acc;
    }, { noPrazo: 0, comAtraso: 0, pendente: 0 });
  });

  const totalGeral = totalPorRegional.reduce((acc, total) => {
    acc.noPrazo += total.noPrazo;
    acc.comAtraso += total.comAtraso;
    acc.pendente += total.pendente;
    return acc;
  }, { noPrazo: 0, comAtraso: 0, pendente: 0 });

  const maiorTotal = Math.max(
    ...totalPorRegional.map(total => total.noPrazo + total.comAtraso + total.pendente)
  );
  const numeros = Array.from({ length: maiorTotal }, (_, i) => maiorTotal - i);

  return (
    <div className="tabela-container">
      <div className="tabela-wrapper">
        <div className="tabela">
          <table>
            <tbody>
              <tr>
                <th className="no-border" style={{ borderBottom: 'none', transform: 'translateY(-15px)', fontWeight: 'normal' }}>0</th>
                <th className="no-border-estilization-bottom" colSpan="3">Total </th>
                {filiaisPorRegional.map((regional, index) => (
                  <React.Fragment key={index}>
                    {regional.filiais.map((filial, idx) => (
                      <React.Fragment key={idx}>
                        <th className="" colSpan="3">{filial}</th>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </tr>
              <tr>
                <th className="no-border"></th>
                <th className="no-border-estilization-top" colSpan="3">Geral</th>
                {filiaisPorRegional.map((regional, index) => (
                  <React.Fragment key={index}>
                    <th className="no-border-estilization-top" colSpan={regional.filiais.length * 3}>Reg {regional.regional}</th>
                  </React.Fragment>
                ))}
              </tr>
            </tbody>
            <thead>
              {numeros.map((numero, index) => (
                <tr key={index}>
                  <td className="primeiro-td" style={{ transform: 'translateY(-15px)' }}>{numero}</td>
                  <td>{totalGeral.noPrazo >= numero ? <div className="caixa-verde"></div> : null}</td>
                  <td>{totalGeral.comAtraso >= numero ? <div className="caixa-azul"></div> : null}</td>
                  <td>{totalGeral.pendente >= numero ? <div className="caixa-vermelha"></div> : null}</td>
                  {filiaisPorRegional.map((regional, idx) => (
                    <React.Fragment key={idx}>
                      {regional.filiais.map((filial, fIdx) => {
                        const dadosFiltrados = dados.filter(item => item.filial === filial);
                        const totalNoPrazo = dadosFiltrados.filter(item => item.atendimento === "no prazo").length;
                        const totalEmAtraso = dadosFiltrados.filter(item => item.atendimento === "com atraso").length;
                        const totalPendente = dadosFiltrados.filter(item => item.atendimento === "pendente").length;
                        return (
                          <React.Fragment key={fIdx}>
                            <td>{totalNoPrazo >= numero ? <div className="caixa-verde"></div> : null}</td>
                            <td>{totalEmAtraso >= numero ? <div className="caixa-azul"></div> : null}</td>
                            <td>{totalPendente >= numero ? <div className="caixa-vermelha"></div> : null}</td>
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </thead>
            
          </table>
          <div className="legenda-container">
              <div className="legenda-item">
                <div className="caixa-legenda caixa-verde"></div>
                <span>No Prazo</span>
              </div>
              <div className="legenda-item">
                <div className="caixa-legenda caixa-azul"></div>
                <span>Com Atraso</span>
              </div>
              <div className="legenda-item">
                <div className="caixa-legenda caixa-vermelha"></div>
                <span>Pendente</span>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Tabela;




