import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";



export const Footer: React.FC<any> = memo((props) => {
  const {
    FooterFlexGrid, 
    FooterFlexGridCol,
    FooterGrid
  } = Styled;


  
 

  return (
    <FooterFlexGrid>
      <FooterFlexGridCol>
        Sobre nós

        <ul>
          <a>Conheça</a>
          <a>COMO COMPRAR</a>
          <a>Indicação e Desconto</a>
        </ul>
      </FooterFlexGridCol>
    </FooterFlexGrid>
  );
});
 