import React from 'react';
import { ventas } from '../dataSales';
import { SalesList } from '../components/SalesList';

function SalesScreen() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Ventas</h1>
        <SalesList ventas={ventas} />
      </div>
      <br />
    </React.Fragment>
  );
}

export default SalesScreen;
