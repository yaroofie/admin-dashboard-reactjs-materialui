import React, { useEffect } from 'react';

export default function Dashboard ()
{
   const page = {
      title: "reactjs dashboard"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Dashboard</div>
   );
}
