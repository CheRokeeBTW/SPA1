import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.6rem 1.4rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
  outline: none;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #003d80;
    transform: translateY(0);
  }

  &:focus {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.7);
  }
`;