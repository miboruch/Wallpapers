import React, { useState } from 'react';

interface DefaultSearchContextState {
  isOpen: boolean;
  setOpen: () => void;
  setBoxState: (value: boolean) => void;
}

export const SearchContext = React.createContext<DefaultSearchContextState>({
  isOpen: false,
  setOpen: () => {},
  setBoxState: (value: boolean) => {}
});

const SearchContextProvider: React.FC<{}> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleSearch = (): void => {
    setOpen(!isOpen);
  };

  const toggleSearchFunction = (value: boolean) => {
    setOpen(value);
  };

  return (
    <SearchContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: toggleSearch,
        setBoxState: toggleSearchFunction
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
