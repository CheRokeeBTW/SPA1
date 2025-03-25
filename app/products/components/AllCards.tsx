import styled from 'styled-components';
import { useRouter } from 'next/navigation';

export const Button = styled.button`
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

export default function ShowAllCards(){

    const router = useRouter();
    
    const handleClick = () => {
    router.push(`/products`);
}

     return(
        <Button onClick={() => handleClick()}>Look at all cards</Button>
        )
}
