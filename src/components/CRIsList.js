import React from 'react';
import data from './CRIsData';

const CRIsList = ({crisList=[]}) => {
  return (
    <>
    { crisList.map((cri,index) => {
      if (cri) {
        return (
          <div key={cri.nome}>
            <h3>{cri.nome}</h3>
            <p> Estado: {cri.localizacao.estado} </p>
            <p> Cidade: {cri.localizacao.cidade} </p>
            <p> Volume: R${cri.valorTotal/1000000}M</p>
            <p> Data emissão: {cri.dataEmissao}</p>
            <p> Data vencimento: {cri.dataVencimento}</p>
            <p> Termo de Securitização: <a href="google.com"> link</a></p>
            {
              cri.ativos.map((item) => (
              <div key={item.juros}>
                <p>Juros: {item.juros} {item.cota}</p>
              </div>
            ))
            }
          </div>
        )	
      }
      return null
    }) }
    </>
  );
}

export default CRIsList