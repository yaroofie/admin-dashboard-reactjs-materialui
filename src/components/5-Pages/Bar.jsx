import React, { useEffect } from 'react';

export default function Bar ()
{
   useEffect( () => { document.title = "Bar Page"; }, [] );

   return (
      <div>Bar</div>
   );
}
