import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";

interface IProps{
  product: any,
  closeModel: any,
}

export const Model: React.FC<any> = memo((props) => {
  const {
    ModelBlock, 
    ModalContent,
  } = Styled;


  const {
    product,
    closeModel
  } = props;
 

  return (
    <ModelBlock>
     <ModalContent>
     <h2>{product.productName}</h2>
      <div>{product.price}</div>
      <div>frete grátis</div>
     <button onClick={() => closeModel()}>Fechar</button>
     </ModalContent>
    </ModelBlock>
  );
});
 