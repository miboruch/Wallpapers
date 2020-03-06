import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';

const StyledImage = styled.img`
  width: calc(100% / 3);
  height: 200px;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border: 2px solid #f2f2f2;
  cursor: pointer;
`;

interface Props {
  id: number;
  imageUrl: string;
}

type ConnectedProps = RouteComponentProps<any> & Props;

const ImageCart: React.FC<ConnectedProps> = ({ imageUrl, id, history }) => {
  return <StyledImage src={imageUrl} onClick={() => history.push(`/photo-page/${id}`)} />;
};

export default withRouter(ImageCart);
