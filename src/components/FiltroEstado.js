import React from 'react';

const FiltroEstado = ({input:keyword, onChange:updateEstado}) => {
  return (
    <>
      <div className="select">
        <select
          /* 
          // here we create a basic select input
          // we set the value to the selected value 
          // and update the setC() state every time onChange is called
          */
          onChange={(e) => {
            updateEstado(e.target.value);
          }}
          className="custom-select"
          aria-label="Filtrar por estado"
        >
          <option value="">Todos os estados</option>
          <option value="AC"> Acre </option>
          <option value="AL"> Alagoas </option>
          <option value="AP"> Amapá </option>
          <option value="AM"> Amazonas </option>
          <option value="BA"> Bahia </option>
          <option value="CE"> Ceará </option>
          <option value="DF"> Distrito Federal </option>
          <option value="ES"> Espírito Santo </option>
          <option value="GO"> Goiás </option>
          <option value="MA"> Maranhão </option>
          <option value="MT"> Mato Grosso </option>
          <option value="MS"> Mato Grosso do Sul </option>
          <option value="MG"> Minas Gerais </option>
          <option value="PA"> Pará </option>
          <option value="PB"> Paraíba </option>
          <option value="PR"> Paraná </option>
          <option value="PE"> Pernambuco </option>
          <option value="PI"> Piauí </option>
          <option value="RR"> Roraima </option>
          <option value="RO"> Rondônia </option>
          <option value="RJ"> Rio de Janeiro </option>
          <option value="RN"> Rio Grande do Norte </option>
          <option value="RS"> Rio Grande do Sul </option>
          <option value="SC"> Santa Catarina </option>
          <option value="SP"> São Paulo </option>
          <option value="SE"> Sergipe </option>
          <option value="TO"> Tocantins </option>
          <option value="EX"> Exterior </option>
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
}

export default FiltroEstado
