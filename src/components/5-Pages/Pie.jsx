import React, { useEffect } from 'react';

export default function Pie ()
{
   useEffect( () =>
   {
      document.title = "Pie Page";
   }, [] );

   return (
      <div>Pie</div>
   );
}
