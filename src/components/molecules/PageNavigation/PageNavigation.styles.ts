import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 250px;
  padding-bottom: 2rem;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  color: #fff;
`;

interface HideArrowProps {
  hide: boolean;
}

const StyledLinkPrevious = styled(Link)<HideArrowProps>`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 16px;
  padding: 0 2rem;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`;

const StyledLinkNext = styled(StyledLinkPrevious)`
  left: auto;
  right: 0;
`;

export { StyledWrapper, NavigationWrapper, StyledParagraph, StyledLinkPrevious, StyledLinkNext };
