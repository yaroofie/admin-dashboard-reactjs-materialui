import React, { useEffect } from 'react';

export default function Line ()
{
   useEffect( () =>
   {
      document.title = "Line Page";
   }, [] );

   return (
      <div>Line</div>
   );
}
