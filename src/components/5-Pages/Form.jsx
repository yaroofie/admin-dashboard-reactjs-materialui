import React, { useEffect } from 'react';

export default function Form ()
{
   const page = {
      title: "reactjs Form"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Form</div>
   );
}
