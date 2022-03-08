import React from 'react';
import data from './CRIsData';

const CRIsList = ({crisList=[]}) => {
  const cardStyle = {
    "background": "white",
    "border": "2px solid gray",
    "margin": "20px"
  }
  const grid = {
    "display": "grid",
    "gridTemplateColumns": "repeat(3, 1fr)", 
    "gridGap": 10
  }
  return (
    <>
    { crisList.map((cri,index) => {
      if (cri) {
        return (
          <div style={grid}>
            <div></div>
            <div key={cri.nome} style={cardStyle} >
              <p> <b> Estado:</b> {cri.localizacao.estado} </p>
              <p> <b> Cidade:</b> {cri.localizacao.cidade} </p>
              <p> <b> Volume:</b> R${cri.valorTotal/1000000}M</p>
              <p> <b> Data emissão:</b> {cri.dataEmissao}</p>
              <p> <b> Data vencimento:</b> {cri.dataVencimento}</p>
              <p>
                <b> Termo de Securitização: </b> 
                <a href={cri.termoSecuritizacao}> link </a>
              </p>
              <b> Juros:</b>
              {
                cri.ativos.map((item) => (
                <div key={item.juros}>
                  <p>{item.indexador} + {item.juros} {item.cota}</p>
                </div>
              ))
              }
              <b> Cedentes: </b>
              {
                cri.cedentes.map((cedente) => (
                <div key={cedente.nome}>
                  <p>{cedente.nome}</p>
                </div>
              ))
              }
            </div>
            <div></div>
          </div>
        )	
      }
      return null
    }) }
    </>
  );
}

export default CRIsList