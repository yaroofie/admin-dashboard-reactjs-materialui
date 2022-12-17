import React, { useEffect } from 'react';

export default function Contacts ()
{
   useEffect( () => { document.title = "Contacts Page"; }, [] );

   return (
      <div>Contacts</div>
   );
}
