import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountryList(data)
        setCountryListDefault(data)
      });
  }

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
  }

  const setRegion = async (filterParam) => {
    if (filterParam === 'All') {
      const filtered = countryListDefault.filter(country => {
        return true
      })
      setCountryList(filtered);
    } else {
      const filtered = countryListDefault.filter(country => {
        return country.region === filterParam
      })
      setCountryList(filtered);
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
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <span className="focus"></span>
      </div>
      <CountryList countryList={countryList} />
    </>
  );
}

export default SearchPage