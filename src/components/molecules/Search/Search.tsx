import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

interface OpenProps {
  isOpen: boolean;
}

const StyledWrapper = styled.div<OpenProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  z-index: 100;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
    right: 0;
    left: auto;
  }
`;

const StyledForm = styled(Form)`
  width: 80%;
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

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 190px;
  height: 40px;
  background: transparent;
  border: 2px solid #fff;
  font-family: ${({ theme }) => theme.font.family.futura};
  letter-spacing: 2px;
  color: #fff;
  font-size: 18px;
  margin-top: 4rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

interface Props {}

interface DefaultFormValue {
  query: string;
}

const Search: React.FC<Props> = () => {
  const initialValue: DefaultFormValue = { query: '' };
  return (
    <StyledWrapper isOpen={true}>
      <Formik
        initialValues={initialValue}
        onSubmit={({ query }) => {
          console.log(query);
        }}
      >
        {({ handleChange, handleBlur, errors, values, setFieldValue }) => (
          <StyledForm>
            <h1>Search</h1>
            <StyledInput
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.query}
              name='query'
            />
            <StyledButton type='submit'>Submit</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default Search;
