import React from 'react';
import data from './CRIsData';

const CRIsList = ({crisList=[]}) => {
  const cardStyle = {
    "background": "white",
    "border": "2px solid gray",
    "margin": "20px",
    "padding": "1rem"
  }
  return (
    <>
    { crisList.map((cri,index) => {
      if (cri) {
        return (
          <div class="columns">
            <div class="column"/>

            <div class="column is-half has-text-left">
              <div key={cri.nome} style={cardStyle} >
                <div class="columns">

                  <div class="column">
                    <span class="is-size-2 has-text-info"> R${cri.valorTotal > 1_000_000_000 ? cri.valorTotal/1_000_000_000 + 'B' : cri.valorTotal/1_000_000 + 'M' } </span>
                    {
                      cri.ativos.map((item) => (
                        <div key={item.juros}>
                        <p>{item.indexador} + {item.juros} {item.cota}</p>
                      </div>
                    ))
                  }
                  </div>

                  <div class="column">
                    <p> <b> Localização: </b> {cri.localizacao.cidade}, {cri.localizacao.estado} </p>
                    <p> <b> Data emissão:</b> {cri.dataEmissao}</p>
                    <p> <b> Data vencimento:</b> {cri.dataVencimento}</p>
                    <p>
                      <b> Termo de Securitização: </b> 
                      <a href={cri.termoSecuritizacao}> link </a>
                    </p>
                    <p> <b> Emissor:</b> {cri.emissor.nome}</p>
                  </div>

                  </div>
                  <b> Cedentes: </b>
                  {
                    cri.cedentes.map((cedente) => (
                    <div key={cedente.nome}>
                      <p>{cedente.nome}</p>
                    </div>
                  ))
                  }
              </div>
            </div>

            <div class="column"/>
          </div>
        )	
      }
      return null
    }) }
    </>
  );
}

export default CRIsList