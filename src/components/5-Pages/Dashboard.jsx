import { Box, Button, useTheme } from '@mui/material';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import React, { useEffect } from 'react';
import { tokens } from "../../scripts/theme";
import Header from "../3-Organisms/Header"

export default function Dashboard ()
{
   useEffect( () => { document.title = "Dashboard Page"; }, [] );
   const theme = useTheme();
   const colors = tokens( theme.palette.mode );

   return (
      <Box m="20px">
         {/* HEADER */}
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Box>
               <Button
                  sx={{
                     backgroundColor: colors.blueAccent[ 700 ],
                     color: colors.grey[ 100 ],
                     fontSize: "14px",
                     fontWeight: "bold",
                     padding: "10px 20px",
                  }}
               >
                  <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                  Download Reports
               </Button>
            </Box>
         </Box>
      </Box>
   );
}
