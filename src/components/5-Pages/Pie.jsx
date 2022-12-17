import React, { useEffect } from 'react';

export default function Pie ()
{
   const page = {
      title: "reactjs Pie"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Pie</div>
   );
}
