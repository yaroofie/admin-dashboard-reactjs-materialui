import React, { useEffect } from 'react';

export default function Geography ()
{
   useEffect( () =>
   {
      document.title = "Geography Page";
   }, [] );

   return (
      <div>Geography</div>
   );
}
