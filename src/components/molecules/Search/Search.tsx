import React, { useContext } from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { Formik, Form } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps, withRouter } from 'react-router';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import { SearchContext } from '../../../providers/SearchContext';
import { AppActions } from '../../../types/actionTypes';
import { fetchStart, setCurrentQuery } from '../../../actions/categoryImagesAction';
import { QuerySchema } from '../../../utils/schemaValidation';

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

interface Props extends RouteComponentProps<any> {}

interface DefaultFormValue {
  query: string;
}

type ConnectedProps = Props & LinkDispatchProps;

const Search: React.FC<ConnectedProps> = ({ setQuery, history, fetchStart }) => {
  const initialValue: DefaultFormValue = { query: '' };
  const { isOpen, setBoxState } = useContext(SearchContext);

  return (
    <StyledWrapper isOpen={isOpen}>
      <CloseButton setBoxState={setBoxState} />
      <Formik
        initialValues={initialValue}
        onSubmit={({ query }) => {
          fetchStart();
          setQuery(query);
          setBoxState(false);
          history.push(`/photos-page/${slugify(query)}?page=1`);
        }}
        validationSchema={QuerySchema}
      >
        {({ handleChange, handleBlur, errors, values }) => (
          <StyledForm>
            <StyledHeading>Search</StyledHeading>
            <InputLineWrapper>
              <StyledInput
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.query}
                name='query'
                required={true}
              />
              <StyledLabel>{errors.query ? errors.query : 'Search images'}</StyledLabel>
            </InputLineWrapper>
            <StyledButton type='submit'>Submit</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

interface LinkDispatchProps {
  setQuery: (query: string) => void;
  fetchStart: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    setQuery: bindActionCreators(setCurrentQuery, dispatch),
    fetchStart: bindActionCreators(fetchStart, dispatch)
  };
};

const SearchWithRouter = withRouter(Search);

export default connect(null, mapDispatchToProps)(SearchWithRouter);
