'use client';


import axios from 'axios';
import { useState, useEffect } from "react";
import Card from './components/Card';
import {List} from './List';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import styled from 'styled-components';
import CreateNewCard from './components/CreateNew'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 8px;
  border: 2px solid #007bff;
  background-color: white;
  color: #007bff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.6);
  }
`;

export default function ProductsList(){
    const [games, setGames] = useState<any[]>([]);
    const [liked, setLiked] = useState<number[]>([]);
    const [showLiked, setShowLiked] = useState(false);
    const router = useRouter();
    const createdProducts = useSelector((state: RootState) => state.products.products);

  console.log(games)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code only runs on the client side
    setIsClient(true);
  }, []);



  useEffect(() => {
    axios
      .get('https://thingproxy.freeboard.io/fetch/https://www.mmobomb.com/api1/games')
      .then(({ data }) => setGames(data))
      .catch(err => console.error('Fetch Error:', err));
  }, [createdProducts]);

  const allProducts = [...games, ...createdProducts];

  const handleClick = (id:any) => {
    router.push(`/products/${id}`);
  };

  const toggleLiked = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const removeCard = (id: number) => {
    setGames((prev) => prev.filter((game) => game.id !== id));
  };

  const displayedProducts = showLiked
    ? allProducts.filter((product) => liked.includes(product.id))
    : allProducts;

    return (
      <div>
        <ButtonWrapper>
          <ToggleButton onClick={() => setShowLiked(!showLiked)}>
        {showLiked ? "Show All" : "Show Favorites"}
      </ToggleButton>
      <CreateNewCard></CreateNewCard>
      </ButtonWrapper>
      <List>
        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            img={product.thumbnail}
            name={product.title}
            info={[{ title: 'Description', description: product.short_description }]}
            onClick={() => handleClick(product.id)}
            liked={liked.includes(product.id)}
            onToggleLiked={() => toggleLiked(product.id)}
            onRemove={() => removeCard(product.id)}
          />
        ))}
      </List>
    </div>
  );
}