import React from "react";
import { memo } from "react";
import { RelatedProduct } from "../../containers/RelatedProduct/RelatedProduct";
import { Partners } from "../../containers/Partners/Partners";
import { HighLights } from "../../containers/HighLights/HighLights";
import { Brands } from "../../containers/Brands/Brands";
import { ContentMenu } from "../../containers/ContentMenu/ContentMenu";
import { MainBanner } from "../../containers/MainBanner/MainBanner";


export const VtxPage: React.FC<any> = memo((props) => {
  return(
    <div>
      <MainBanner/>
      <ContentMenu/>
      <RelatedProduct/>
      <Partners/>
      <HighLights/>
      <Brands/>
    </div>
  );

});