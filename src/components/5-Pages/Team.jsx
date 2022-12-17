import React, { useEffect } from 'react';

export default function Team ()
{
   useEffect( () =>
   {
      document.title = "Team Page";
   }, [] );

   return (
      <div>Team</div>
   );
}
