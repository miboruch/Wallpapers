import React, { useState } from 'react';

interface DefaultSavedImagesContextState {
  isOpen: boolean;
  setOpen: () => void;
  setBoxState: (value: boolean) => void;
}

export const SavedImagesContext = React.createContext<DefaultSavedImagesContextState>({
  isOpen: false,
  setOpen: () => {},
  setBoxState: (value: boolean) => {}
});

const SavedImagesContextProvider: React.FC<{}> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleSavedImages = (): void => {
    setOpen(!isOpen);
  };

  const toggleSavedImagesFunction = (value: boolean) => {
    setOpen(value);
  };

  return (
    <SavedImagesContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: toggleSavedImages,
        setBoxState: toggleSavedImagesFunction
      }}
    >
      {children}
    </SavedImagesContext.Provider>
  );
};

export default SavedImagesContextProvider;
