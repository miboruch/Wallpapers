import React from 'react';
import SavedImagesContextProvider from '../../../providers/SavedImagesContext';
import SavedImages from '../../molecules/SavedImages/SavedImages';

interface Props {}

const SavedImagesTemplate: React.FC<Props> = ({ children }) => {
  return (
    <SavedImagesContextProvider>
      <SavedImages />
      {children}
    </SavedImagesContextProvider>
  );
};

export default SavedImagesTemplate;
