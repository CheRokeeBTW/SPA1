'use client';

import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { Button } from './RemoveButton';


const Wrapper = styled.article`
  border-radius: 12px;
  background-color: #f4f4f9;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #ddd;
  margin: 15px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-bottom: 2px solid #ddd;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardListItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  & > b {
    font-weight: bold;
    color: #222;
  }
`;

const LikeIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ImageButton = styled.button<{ $liked: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ $liked }) => ($liked ? 'yellow' : 'transparent')};
  background-image: url('/images/like-removebg-preview.png');
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

interface InfoItem {
  title: string;
  description: string;
  like?: boolean;
}

interface CardProps {
  img: string;
  name: string;
  info: InfoItem[];
  liked: boolean;
  onClick: () => void;
  onToggleLiked: () => void;
  onRemove: () => void;
}

const Card: React.FC<CardProps> = ({ img, name, info, liked, onClick, onToggleLiked, onRemove }) => {
  const toggleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggleLiked();
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onRemove();
  };

  return (
    <Wrapper onClick={onClick}>
      <Button onClick={handleRemoveClick}>
        <IoClose /> Remove
      </Button>
      <CardImage src={img} alt={name} />
      <CardBody>
      <LikeIcon>
      <ImageButton $liked={!!liked} onClick={toggleLike} />
</LikeIcon>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;