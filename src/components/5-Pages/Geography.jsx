import React, { useEffect } from 'react';

export default function Geography ()
{
   const page = {
      title: "reactjs Geography"
   };

   useEffect( () => { document.title = page.title; }, [] );

   return (
      <div>Geography</div>
   );
}
