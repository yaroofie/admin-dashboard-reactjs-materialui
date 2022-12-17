import React, { useEffect } from 'react';

export default function Bar ()
{
   const page = {
      title: "reactjs Bar"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Bar</div>
   );
}
