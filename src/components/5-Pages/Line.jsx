import React, { useEffect } from 'react';

export default function Line ()
{
   const page = {
      title: "reactjs Line"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Line</div>
   );
}
