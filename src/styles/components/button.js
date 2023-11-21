import styled from 'styled-components';


export const Button = styled.button`
  background-color: #FFFF;
  color: black;
  border: none;
  font-size: 22px;
  cursor: pointer;
  margin-top: 95px;
  font-weight: 900;
  border-radius: 10px;
  font-family:PT Serif;
  width: 273px;
  text-align: center;
   height: 39px; 
   &:hover {
    transition: 0.7s;
    transform: scale(1.1); 
  }  
  &:not(:hover) {
    transition: all 0.7s;
  }
  @media (max-width: 768px) {
    width: 203px;
    font-size: 25px;
}
`;

export const NpButton = styled.button`
  font-size: 22px;
  cursor: pointer;
  color:rgba(38, 54, 136, 1);
  display: flex;
    background-color: #FFF; 
  font-family: 'PT Serif';
  align-items: center;
  justify-content: center;
  text-align: center;
   height: 39px; 
   &:hover {
    transition: 0.7s;
    transform: scale(1.1); 
  }  
  &:not(:hover) {
    transition: all 0.7s;
  }
`;
