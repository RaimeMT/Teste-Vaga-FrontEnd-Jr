import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";




export const HighLights: React.FC<any> = memo((props) => {
  const {
    HighLightsFlexGrid, 
    HighLightsFlexGridCol,
    HighLightsGrid,
  } = Styled;


  
 

  return (
    <HighLightsFlexGrid>
        <HighLightsFlexGridCol>
          Produtos
        </HighLightsFlexGridCol>
        <HighLightsFlexGridCol>
          Produtos
        </HighLightsFlexGridCol>
    </HighLightsFlexGrid>
  );
});
 