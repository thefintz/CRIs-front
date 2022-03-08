import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage.js';

function App() {
  return (
    <div className="App" style={{"background": "#f6f9fc", "minHeight": "100vh"}}>
      <SearchPage />
    </div>
  );
}

export default App;