import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const ButtonWrapper = styled.div`
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledIcon = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
`;

export { ButtonWrapper, StyledIcon };
