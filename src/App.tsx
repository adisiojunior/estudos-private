
import React, { useState } from 'react';
import CardGrafico from './componentes/CardGrafico';
import GraficoLib from './componentes/GraficoLib';
import Tabela from './componentes/Tabela';

function App() {
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

  const [filtroRegional, setFiltroRegional] = useState('');
  const [filtroFilial, setFiltroFilial] = useState('');
  const [filtroData, setFiltroData] = useState('');


  const filtrarDados = () => {
    return dados.filter(item => {

      if (filtroRegional && item.regional !== filtroRegional) {
        return false;
      }

      if (filtroFilial && item.filial !== filtroFilial) {
        return false;
      }

      if (filtroData && item.imposicao !== filtroData) {
        return false;
      }
      return true;
    });
  };

  const limparFiltros = () => {
    setFiltroRegional('');
    setFiltroFilial('');
    setFiltroData('');
  };

  const renderizarItens = () => {
    const itensFiltrados = filtrarDados();

    return itensFiltrados.map((item, index) => (
      <tr key={index}>
        <td>{item.regional}</td>
        <td>{item.filial}</td>
        <td>{item.equipamento}</td>
        <td>{item.imposicao}</td>
        <td>{item.dias_sem_coletas}</td>
        <td>{item.data_coleta}</td>
        <td>{item.atendimento}</td>
      </tr>
    ));
  };

  return (
    <div>
    <h2>Indicador - Coleta Imposta</h2>
    <div>
      <label>
        Regional:
        <select value={filtroRegional} onChange={e => setFiltroRegional(e.target.value)}>
          <option value="">Todos</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
        </select>
      </label>
      <label>
        Filial:
        <select value={filtroFilial} onChange={e => setFiltroFilial(e.target.value)}>
          <option value="">Todos</option>
          {dados.map((item, index) => (
            <option key={index} value={item.filial}>{item.filial}</option>
          ))}
        </select>
      </label>
      <label>
        Data:
        <input type="date" value={filtroData} onChange={e => setFiltroData(e.target.value)} />
      </label>
      <button onClick={filtrarDados}>Pesquisar</button>
      <button onClick={limparFiltros}>Limpar</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Regional</th>
          <th>Filial</th>
          <th>Equipamento</th>
          <th>1a. Imposição</th>
          <th>Dias sem Coletas</th>
          <th>Data da Coleta</th>
          <th>Atendimento</th>
        </tr>
      </thead>
      <tbody>
        {renderizarItens()}
      </tbody>
    </table>
    <div>
      <h1>Gráfico</h1>        
        <Tabela />
    </div>
  </div>
  
);

}

export default App
