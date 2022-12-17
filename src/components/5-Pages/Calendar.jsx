import React, { useEffect } from 'react';

export default function Calendar ()
{
   const page = {
      title: "reactjs Calendar"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Calendar</div>
   );
}
