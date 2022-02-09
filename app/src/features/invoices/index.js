import React from 'react';
import { InvoicesList }  from './list';
import { Invoice }  from './invoice';

export const Invoices = ({ registerAction }) => {

  console.log('Estoy aquí');

  registerAction({
    hook: "$ONE_ROUTE",
    handler: {
      path: "/invoices",
      exact: true,
      element: <InvoicesList />
    }
  });

  registerAction({
    hook: "$ONE_ROUTE",
    handler: {
      path: "/invoices/invoice/:id",
      exact: true,
      element: <Invoice />
    }
  });

  registerAction({
    hook: "$ONE_ROUTE",
    handler: {
      path: "/invoices/invoice",
      exact: true,
      element: <Invoice />
    }
  });

  /* return (<InvoicesList>
    
  </InvoicesList>); */
}