import React, { useEffect } from 'react';

export default function Form ()
{
   useEffect( () =>
   {
      document.title = "Form Page";
   }, [] );

   return (
      <div>Form</div>
   );
}
