import React from 'react';

const CRIsList = ({crisList=[]}) => {
  return (
    <>
    { crisList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.nome}</h1>
              <h3>{data.localizacao.estado}</h3>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CRIsList