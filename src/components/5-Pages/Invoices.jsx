import React, { useEffect } from 'react';

export default function Invoices ()
{
   useEffect( () =>
   {
      document.title = "Invoices Page";
   }, [] );

   return (
      <div>Invoices</div>
   );
}
