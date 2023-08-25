import React, { useEffect, useState } from "react";
import { memo } from "react";
import * as Styled from "./styled";
import { IProductsResult, getRelatedProduct } from "../../shared/models/RelatedProductModel";
import { Model } from "../../components/Modal/Modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



export const RelatedProduct: React.FC<any> = memo((props) => {
  const {
    RelatedProductFlexGrid, 
    RelatedProductFlexGridCol,
    RelatedProductGrid,
  } = Styled;

  

  const [productsList, setProductsList] = useState<any>([]);
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<any>();


  const getProductsList = async () => {
    try { 
      const response = await getRelatedProduct();

      if (response.success){
        setProductsList(response.products);
      }
      

      
      console.log('response', response);

    } catch(error) {

    }
  } 


  const handleClickButton = async (item: IProductsResult) => {
    console.log('item', item);
    setProductItem(item);
    setIsModelOpen(true);
  }

  const closeModel = async () => {
    
    setProductItem({});
    setIsModelOpen(false);
  }

  useEffect(() =>{
    getProductsList();
  },[])

  return (
    <>
    <RelatedProductFlexGrid>
      <Swiper
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper"
          slidesPerView={4}
          scrollbar={{ draggable: true }}
        >
        {productsList?.map((item: IProductsResult, index: number) =>(
          <SwiperSlide>
          <RelatedProductFlexGridCol>
          <RelatedProductGrid>
            <div>
              <img src={item.photo}/>
            </div>
            <h2>{item.productName}</h2>
            <div>{item.price}</div>
            <div>frete grátis</div>
            <button onClick={() => handleClickButton(item)}>COMPRAR</button>
          </RelatedProductGrid>
        </RelatedProductFlexGridCol>
        </SwiperSlide>
        ))}
      </Swiper>

    </RelatedProductFlexGrid>
      { isModelOpen && <Model product={productItem} closeModel={closeModel} /> }
    </>
  );
});
