import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";



export const ContentMenu: React.FC<any> = memo((props) => {
  const {
    ContentMenuFlexGrid, 
    ContentMenuFlexGridCol,
    ContentMenuGrid
  } = Styled;


  
 

  return (
    <ContentMenuFlexGrid>
        <ContentMenuFlexGridCol>
          Tecnologia
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Supermercado
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Bebidas
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Ferramentas
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Saúde
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Esportes e Fitness
        </ContentMenuFlexGridCol>
        <ContentMenuFlexGridCol>
          Moda
        </ContentMenuFlexGridCol>
    </ContentMenuFlexGrid>
  );
});
 