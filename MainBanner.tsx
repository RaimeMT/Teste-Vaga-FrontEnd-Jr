import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";



export const MainBanner: React.FC<any> = memo((props) => {
  const {
    MainBannerFlexGrid, 
    MainBannerFlexGridCol,
    MainBannerGrid
  } = Styled;


  
 

  return (
    <MainBannerFlexGrid>
        <MainBannerFlexGridCol>
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos </h2>
        <button>Ver produto</button>
        </MainBannerFlexGridCol>
    </MainBannerFlexGrid>
  );
});
 