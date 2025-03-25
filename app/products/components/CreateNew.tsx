import styled from 'styled-components';
import { useRouter } from 'next/navigation';

export const CreateNew = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 8px;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #0056b3;
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

export default function CreateNewCard(){

    const router = useRouter();
    

const createNewCard = () => {
    router.push(`/create-product`);
}

     return(
        <CreateNew onClick={() => createNewCard()}>Create a new card</CreateNew>
        )
}
