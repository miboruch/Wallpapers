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
import {
  StyledWrapper,
  StyledForm,
  InputLineWrapper,
  StyledLabel,
  StyledInput,
  StyledHeading,
  StyledButton
} from './Search.styles';

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
