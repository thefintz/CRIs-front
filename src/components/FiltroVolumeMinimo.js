import React from 'react';

const FiltroVolumeMinimo = ({input:keyword, onChange:setVolumeMinimo}) => {
  const BarStyling = {width:"2rem",background:"white", border:"none", padding:"0.5rem"};
  return (
    <div>
      <span> Volume mínimo: R$ </span>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"1"}
        onChange={(e) => setVolumeMinimo(e.target.value)}
      />
      <span> M </span>
    </div>
  );
}

export default FiltroVolumeMinimo