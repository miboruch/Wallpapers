import styled from 'styled-components';
import { Form } from 'formik';

interface OpenProps {
  isOpen: boolean;
}

const StyledWrapper = styled.div<OpenProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.7s ease, visibility 0.7s ease;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
    right: 0;
    left: auto;
  }
`;

const StyledForm = styled(Form)`
  width: 80%;
`;

const InputLineWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.font.family.futura};
  position: absolute;
  top: 23px;
  left: 0;
  color: #fff;
  font-size: 13px;
  transition: transform 0.5s ease;
  transform-origin: left;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  font-size: 24px;
  border: none;
  border-bottom: 3px solid #fff;
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.futura};
  letter-spacing: 2px;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
    border-bottom: 3px solid #8d8d8d;
  }

  &:focus ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-36px);
  }
  &:valid ~ ${StyledLabel} {
    transform: scale(0.8) translateY(-36px);
  }
`;

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 42px;
  color: #fff;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  width: 190px;
  height: 40px;
  background: transparent;
  border: 2px solid #fff;
  font-family: ${({ theme }) => theme.font.family.futura};
  letter-spacing: 2px;
  color: #fff;
  font-size: 14px;
  margin-top: 4rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export {
  StyledWrapper,
  StyledForm,
  InputLineWrapper,
  StyledLabel,
  StyledInput,
  StyledHeading,
  StyledButton
};
