import { Routes, Route } from 'react-router-dom';

export const LayoutRoutes = ({ items }) => {
  if (!items.length) {
    return (
      <div
        style={{
          margin: '10px 23px',
        }}
      >
        No routes configured.
        <br />
        Please hook into{' '}
        <em>
          <code>LAYOUT_ROUTE</code>
        </em>
        .
      </div>
    );
  }

  return (
    <Routes>
      {items.map((routeConfig, idx) => (
        <Route key={idx} {...routeConfig} />
      ))}
    </Routes>
  );
};

/* import { Routes, Route } from 'react-router-dom';

import OneLayout from "./Index"
import { Invoices } from './../../../features/invoices/index'
//import Invoice from './invoices/invoice'

export const LayoutRoutes = () => {

  return (
    <Routes>
        <Route exact path="/" element={<OneLayout />} />
        <Route path="/invoices" element={<Invoices />}/>   
        <Route path="/invoices/invoice/:id" element={<Invoice />}/>         
        <Route path="/invoices/invoice" element={<Invoice />}/>     
      </Routes>
  );

} */