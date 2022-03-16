import React, { useState, useEffect } from 'react';
import FiltroCidade from './FiltroCidade';
import CRIsList from './CRIsList';
import FiltroEstado from './FiltroEstado';
import FiltroVolumeMinimo from './FiltroVolumeMinimo';
import CRIsData from './CRIsData';
import Navbar from './Navbar';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [estado, setEstado] = useState('All');
  const [volumeMinimo, setVolumeMinimo] = useState('1');
  const [crisListDefault, setCRIsListDefault] = useState();
  const [crisList, setCRIsList] = useState();

  const fetchData = async () => {
    const data = CRIsData
    setCRIsList(data)
    setCRIsListDefault(data)
  }

  const updateInput = async (input) => {
    await setInput(input);
    updateFilters(input, volumeMinimo, estado);
  }

  const updateEstado = async (estado) => {
    await setEstado(estado);
    updateFilters(input, volumeMinimo, estado);
  }

  const updateVolumeMinimo = async (volumeMinimo) => {
    await setVolumeMinimo(volumeMinimo);
    updateFilters(input, volumeMinimo, estado);
  }

  const updateFilters = async (input, volumeMinimo, estado) => {
    const filteredInput = crisListDefault.filter(crisData => {
      return crisData.localizacao.cidade
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // remove accentuation
        .includes(input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    })
    const filteredVolumeMinimo = crisListDefault.filter(crisData => {
      return crisData.valorTotal >= volumeMinimo * 1_000_000
    })
    const filteredEstado = crisListDefault.filter(cri => {
      return estado === 'All' ? true : cri.localizacao.estado === estado
    })
    const multiFilter0 = crisListDefault.filter(value => filteredInput.includes(value));
    const multiFilter1 = multiFilter0.filter(value => filteredVolumeMinimo.includes(value));
    const multiFilter2 = multiFilter1.filter(value => filteredEstado.includes(value));
    setCRIsList(multiFilter2);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <>
      <Navbar/>
      <br></br>
      
      <div class="columns">

        <div class="column">
          <br></br>
          <h1 class="is-size-3 mb-3">Fintz DCM</h1>
          <FiltroEstado
            estado={estado}
            onChange={updateEstado}
          />
          <FiltroCidade
            input={input}
            onChange={updateInput}
          />
          <FiltroVolumeMinimo
            volumeMinimo={volumeMinimo}
            onChange={updateVolumeMinimo}
          />
        </div>
        <div class="column is-half">
          <CRIsList crisList={crisList} />
        </div>
      </div>
    </>
  );
}

export default SearchPage