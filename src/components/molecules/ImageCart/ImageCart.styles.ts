import styled from 'styled-components';

const StyledImage = styled.img`
  width: calc(100% / 3);
  height: 200px;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border: 2px solid #f2f2f2;
  cursor: pointer;
`;

export { StyledImage };
