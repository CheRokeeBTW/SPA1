'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/store/ProductsSlice';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f9;
  max-width: 400px;
  margin: 50px auto;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [publisher, setPublisher] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !thumbnail || !genre || !platform || !publisher || !releaseDate) {
      alert('All fields are required!');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      short_description: description,
      thumbnail,
      genre,
      platform,
      publisher,
      release_date: releaseDate,
    };

    dispatch(addProduct(newProduct)); 
    router.push('/products'); 
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle>Create a New Product</FormTitle>
        <StyledInput
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <SubmitButton type="submit">Add Product</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CreateProduct;