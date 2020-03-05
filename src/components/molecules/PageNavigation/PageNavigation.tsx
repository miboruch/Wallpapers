import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../../reducers/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../types/actionTypes';
import { bindActionCreators } from 'redux';
import { fetchAllCategoryImages } from '../../../actions/categoryImagesAction';

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
`;

interface HideArrowProps {
  hide: boolean;
}

const StyledLinkPrevious = styled(Link)<HideArrowProps>`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ hide }) => (hide ? 'yellow' : '#fff')};
  font-size: 16px;
  padding: 0 2rem;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`;

const StyledLinkNext = styled(StyledLinkPrevious)`
  left: auto;
  right: 0;
`;

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
    fetchAllQueryImages(currentCategory, page);
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
  fetchAllQueryImages: (category: string, pageNumber: number) => void;
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
