'use client';

import React from 'react';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { Button } from '../components/Button';

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

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

const ProductDetails = styled.div`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #555;
`;

type ProductProps = {
  product: {
    id: string;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
    publisher: string;
    release_date: string;
  };
};

const ClientProductDetails = ({ product }: ProductProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <img src={product.thumbnail} alt={product.title} width="100%" height="250" />
      <ProductDetails><strong>Description:</strong> {product.short_description}</ProductDetails>
      <ProductDetails><strong>Genre:</strong> {product.genre}</ProductDetails>
      <ProductDetails><strong>Platform:</strong> {product.platform}</ProductDetails>
      <ProductDetails><strong>Publisher:</strong> {product.publisher}</ProductDetails>
      <ProductDetails><strong>Release Date:</strong> {product.release_date}</ProductDetails>
      <Button onClick={() => router.push('/products')}>
        <IoArrowBack /> Back
      </Button>
    </Wrapper>
  );
};

export default ClientProductDetails;