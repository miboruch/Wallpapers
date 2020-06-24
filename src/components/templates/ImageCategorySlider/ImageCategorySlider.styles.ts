import styled from 'styled-components';
import Slider from 'react-slick';
import { ReactSVG } from 'react-svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    -webkit-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const ButtonWrapper = styled.div`
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
    height: 80px;
  }
`;

const NavigationWrapper = styled.section`
  position: absolute;
  right: 2rem;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledIconRight = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
  position: relative;
  box-sizing: initial;
  padding: 2rem;
  cursor: pointer;
`;

const StyledIconLeft = styled(StyledIconRight)`
  transform: rotate(180deg);
`;

export {
  StyledWrapper,
  StyledSlider,
  ButtonWrapper,
  NavigationWrapper,
  StyledIconLeft,
  StyledIconRight
};
