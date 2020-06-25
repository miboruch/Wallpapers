import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const StyledWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-bottom-left-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => theme.mq.standard} {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledIcon = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
  transform: translateX(-3px) rotate(180deg);
`;

export { StyledWrapper, StyledIcon };
