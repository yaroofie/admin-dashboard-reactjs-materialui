import React, { useEffect } from 'react';

export default function Invoices ()
{
   const page = {
      title: "reactjs Invoices"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Invoices</div>
   );
}
