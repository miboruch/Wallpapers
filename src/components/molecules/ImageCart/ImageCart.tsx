import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { StyledImage } from './ImageCart.styles';

interface Props {
  id: number;
  imageUrl: string;
  closeBoxState?: () => void;
}

type ConnectedProps = RouteComponentProps<any> & Props;

const ImageCart: React.FC<ConnectedProps> = ({ imageUrl, id, history, closeBoxState }) => {
  return (
    <StyledImage
      src={imageUrl}
      onClick={
        closeBoxState
          ? () => {
              history.push(`/photo-page/${id}`);
              closeBoxState();
            }
          : () => {
              history.push(`/photo-page/${id}`);
            }
      }
    />
  );
};

export default withRouter(ImageCart);
