import React, { useEffect } from 'react';

export default function Contacts ()
{
   const page = {
      title: "reactjs Contacts"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Contacts</div>
   );
}
