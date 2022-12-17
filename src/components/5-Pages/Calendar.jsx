import React, { useEffect } from 'react';

export default function Calendar ()
{
   useEffect( () => { document.title = "Calendar Page"; }, [] );

   return (
      <div>Calendar</div>
   );
}
