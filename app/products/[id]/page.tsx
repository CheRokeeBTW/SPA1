'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { Button } from '../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';


type ParamsType = {
  params: {
    id: string;
  };
};

const Wrapper = styled.article`
  width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const CardBody = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;


const ProductDetails = ({ params }: ParamsType) => {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();


  const createdProducts = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
      
      const productFromRedux = createdProducts.find((item:any) => item.id.toString() === id);
      
      if (productFromRedux) {
          setProduct(productFromRedux);
      } else {
         
          axios
              .get("https://thingproxy.freeboard.io/fetch/https://www.mmobomb.com/api1/games")
              .then(({ data }) => {
                  const selectedProduct = data.find((item: any) => item.id.toString() === id);
                  setProduct(selectedProduct);
              })
              .catch((err) => console.error("Fetch Error:", err));
      }
  }, [id, createdProducts]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleClick = () => {
      router.push(`/products/`);
  };

  return (
    <Wrapper>
      <CardBody>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductImage src={product.thumbnail} alt={product.title} />
        <ProductInfo><strong>Description:</strong> {product.short_description}</ProductInfo>
        <ProductInfo><strong>Genre:</strong> {product.genre}</ProductInfo>
        <ProductInfo><strong>Platform:</strong> {product.platform}</ProductInfo>
        <ProductInfo><strong>Publisher:</strong> {product.publisher}</ProductInfo>
        <ProductInfo><strong>Release Date:</strong> {product.release_date}</ProductInfo>
      </CardBody>
      <Button onClick={handleClick}>
        <IoArrowBack /> Back
      </Button>
    </Wrapper>
  );
};

export default ProductDetails;
