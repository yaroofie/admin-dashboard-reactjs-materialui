import React, { useEffect } from 'react';

export default function Dashboard ()
{
   useEffect( () => { document.title = "Dashboard Page"; }, [] );

   return (
      <div>Dashboard</div>
   );
}
