import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';




export const Brands: React.FC<any> = memo((props) => {
  const {
    BrandsFlexGrid, 
    BrandsFlexGridCol,
    BrandsGrid,
  } = Styled;

  const brandsList = [
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    }, 
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    {
      BrandsName: 'Brand-1',
      img: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-smart-mobile-phone-transparent-png-mockup-png-image_5883046.png",
    },
    
  ]

    

  return (
    <>
    <BrandsFlexGrid>
      <Swiper
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper"
          slidesPerView={5}
          scrollbar={{ draggable: true }}
        >
        {brandsList?.map((item: any, index: number) =>(
          <SwiperSlide>
          <BrandsFlexGridCol>
          <BrandsGrid>
            <div>
              <img src={item.img}/>
            </div>
          </BrandsGrid>
        </BrandsFlexGridCol>
        </SwiperSlide>
        ))}
      </Swiper>
    </BrandsFlexGrid>
    </>
  );
});
 