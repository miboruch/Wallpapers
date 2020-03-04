import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';

const StyledWrapper = styled.div<WrapperProps>`
  width: calc(100% / 3);
  height: 200px;
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  overflow: hidden;
  border: 2px solid #f2f2f2;
  cursor: pointer;
`;

interface WrapperProps {
  imageUrl: string;
  title: string;
}

interface Props extends WrapperProps {
  id: number;
}

type ConnectedProps = RouteComponentProps<any> & Props;

const ImageCart: React.FC<ConnectedProps> = ({ imageUrl, title, id, history }) => {
  return (
    <StyledWrapper
      imageUrl={imageUrl}
      title={title}
      onClick={() => history.push(`/photo-page/${id}`)}
    />
  );
};

export default withRouter(ImageCart);
