import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";



export const Partners: React.FC<any> = memo((props) => {
  const {
    PartnersFlexGrid, 
    PartnersFlexGridCol,
    PartnersGrid
  } = Styled;


  
 

  return (
    <PartnersFlexGrid>
        <PartnersFlexGridCol>
          parceiros
        </PartnersFlexGridCol>
        <PartnersFlexGridCol>
          parceiros
        </PartnersFlexGridCol>
    </PartnersFlexGrid>
  );
});
 