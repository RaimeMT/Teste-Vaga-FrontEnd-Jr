import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";




export const Header: React.FC<any> = memo((props) => {
  const {
    HeaderFlexGrid, 
    HeaderFlexGridCol,
    HeaderGrid
  } = Styled;


  
 

  return (
    <HeaderFlexGrid>
        <HeaderFlexGridCol>
      
        Compra 100% segura 
        </HeaderFlexGridCol>
        <HeaderFlexGridCol>
        Frete grátis acima de R$ 200
        </HeaderFlexGridCol>
        <HeaderFlexGridCol>
        Parcele suas compras
        </HeaderFlexGridCol>
        
    </HeaderFlexGrid>
  );
});
 