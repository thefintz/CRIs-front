
import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"10rem",background:"white", border:"none", padding:"0.5rem", margin:"1rem"};
  return (
    <div>
      <span> Cidade: </span>
      <input 
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Qual cidade procurar?"}
      onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar