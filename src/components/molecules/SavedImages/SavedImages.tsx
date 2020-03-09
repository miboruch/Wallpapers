import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/constants';
import { connect } from 'react-redux';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../types/actionTypes';
import { bindActionCreators } from 'redux';
import { removeSavedImage, saveImage } from '../../../actions/savedImagesAction';
import { AppState } from '../../../reducers/rootReducer';

interface Props {}

type ConnectedProps = Props & LinkDispatchProps & LinkStateProps;

const SavedImages: React.FC<ConnectedProps> = ({savedImages, saveImage, removeSavedImage }) => {
  // useEffect(() => {
  //   fetchSavedImages();
  // }, []);

  console.log(savedImages);

  return <div></div>;
};

interface LinkStateProps {
  loading: boolean;
  savedImages: any[];
  error: string | null;
}

interface LinkDispatchProps {
  // fetchSavedImages: () => void;
  saveImage: (id: string, webFormatURL: string) => void;
  removeSavedImage: (id: string) => void;
}

const mapStateToProps = ({
  savedImagesReducer: { loading, savedImages, error }
}: AppState): LinkStateProps => {
  return { loading, savedImages, error };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    // fetchSavedImages: bindActionCreators(fetchSavedImages, dispatch),
    saveImage: bindActionCreators(saveImage, dispatch),
    removeSavedImage: bindActionCreators(removeSavedImage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedImages);
