import React, { useEffect } from 'react';

export default function Team ()
{
   const page = {
      title: "reactjs Team"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Team</div>
   );
}
