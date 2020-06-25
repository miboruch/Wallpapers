import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../reducers/rootReducer';
import { AppActions } from '../../../types/actionTypes';
import { fetchAllCategoryImages } from '../../../actions/categoryImagesAction';
import {
  StyledWrapper,
  NavigationWrapper,
  StyledParagraph,
  StyledLinkPrevious,
  StyledLinkNext
} from './PageNavigation.styles';

interface Props {
  pageNumber: any;
  currentCategory: string;
}

type ConnectedProps = Props & LinkStateProps & LinkDispatchProps;

const PageNavigation: React.FC<ConnectedProps> = ({
  pageNumber,
  currentCategory,
  totalImages,
  fetchAllQueryImages
}) => {
  const page = parseInt(pageNumber);
  const [prevPage, setPrevPage] = useState<number>(page);
  const hidePrevious = parseInt(pageNumber) - 1 <= 0;
  const hideNext = parseInt(pageNumber) + 1 > Math.ceil(totalImages / 21);

  if (prevPage !== page) {
    fetchAllQueryImages(currentCategory, page, 21);
    setPrevPage(page);
  }

  return (
    <StyledWrapper>
      <NavigationWrapper>
        <StyledLinkPrevious
          to={`/photos-page/${currentCategory}?page=${parseInt(pageNumber) - 1}`}
          hide={hidePrevious}
        >
          PREV
        </StyledLinkPrevious>
        <StyledParagraph>
          {pageNumber} / {Math.ceil(totalImages / 21)}
        </StyledParagraph>
        <StyledLinkNext
          to={`/photos-page/${currentCategory}?page=${parseInt(pageNumber) + 1}`}
          hide={hideNext}
        >
          NEXT
        </StyledLinkNext>
      </NavigationWrapper>
    </StyledWrapper>
  );
};

interface LinkStateProps {
  totalImages: number;
}

interface LinkDispatchProps {
  fetchAllQueryImages: (category: string, pageNumber: number, perPage: number | string) => void;
}

const mapStateToProps = ({ categoryImagesReducer: { totalImages } }: AppState): LinkStateProps => {
  return { totalImages };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchAllQueryImages: bindActionCreators(fetchAllCategoryImages, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigation);
