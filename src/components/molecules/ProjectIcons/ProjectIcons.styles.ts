import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 90;
`;

export { ButtonWrapper, IconWrapper };
