'use client';

import { Routes ,Route } from 'react-router-dom';
import ProductsList from "./products/page";
import { BrowserRouter } from 'react-router-dom';
import ProductBtn from "./ProductsBtn";
import styled from 'styled-components';

const Body = styled.div`
  width: 100vh;
  height : 100vh;
  align-content:center;
  text-align:center;
  margin:auto;
`;

export default function Home() {

  return (
    <Body>
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<ProductBtn/>} />
        <Route path="/products" element = {<ProductsList/>} />
      </Routes>
      </BrowserRouter>
    </Body>
);
}
