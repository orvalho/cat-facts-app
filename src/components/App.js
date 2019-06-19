import './App.css';
import React from 'react';

import GetFactsButton from 'components/GetFactsButton';
import FactsList from 'components/FactsList';

export default() => {
  return (<div className="app">
    <GetFactsButton/>
    <FactsList/>
  </div>);
};
