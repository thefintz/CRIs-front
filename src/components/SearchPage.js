import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CRIsList from './CRIsList';
import CRIsData from './CRIsData';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [crisListDefault, setCRIsListDefault] = useState();
  const [crisList, setCRIsList] = useState();

  const fetchData = async () => {
    const data = CRIsData
    setCRIsList(data)
    setCRIsListDefault(data)
  }

  const updateInput = async (input) => {
    const filtered = crisListDefault.filter(cri => {
      return cri.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCRIsList(filtered);
  }

  const setRegion = async (filterParam) => {
    if (filterParam === 'All') {
      const filtered = crisListDefault.filter(cri => {
        return true
      })
      setCRIsList(filtered);
    } else {
      const filtered = crisListDefault.filter(cri => {
        return cri.localizacao.estado === filterParam
      })
      setCRIsList(filtered);
    }
  }

  useEffect(() => { fetchData() }, []);

  return (
    <>
      <h1>Country List</h1>
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <div className="select">
        <select
          /* 
          // here we create a basic select input
          // we set the value to the selected value 
          // and update the setC() state every time onChange is called
          */
          onChange={(e) => {
            setRegion(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Countries By Countries"
        >
          <option value="All">Todos os estados</option>
          <option value="AP">Amapá</option>
          <option value="PA">Pará</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="TO">Tocantings</option>
          <option value="SP">São Paulo</option>
          <option value="PR">Paraná</option>
          <option value="MT">Mato Grosso</option>
        </select>
        <span className="focus"></span>
      </div>
      <CRIsList crisList={crisList} />
    </>
  );
}

export default SearchPage