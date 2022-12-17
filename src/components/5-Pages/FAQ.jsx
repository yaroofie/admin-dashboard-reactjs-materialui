import React, { useEffect } from 'react';

export default function FAQ ()
{
   const page = {
      title: "reactjs FAQ"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>FAQ</div>
   );
}
