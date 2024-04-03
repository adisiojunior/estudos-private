import React from 'react';

interface FiliaisLineProps {
  filiaisUnicas: string[];
}

const FiliaisLine: React.FC<FiliaisLineProps> = ({ filiaisUnicas }) => {

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

export default FiliaisLine;
