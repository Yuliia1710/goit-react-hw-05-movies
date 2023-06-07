import styled from '@emotion/styled';

export const Button = styled.button`
  width: 150px;
  height: 40px;

  background: brown;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #c33131;
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 448px;
  height: 40px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
`;
