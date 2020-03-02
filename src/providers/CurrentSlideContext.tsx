import React, { useState } from 'react';

interface DefaultSlideContext {
  currentSlide: number;
  previousSlide: number;
  setSlide: (index: number) => void;
  setPreviousSlide: (index: number) => void;
}

export const SliderContext = React.createContext<DefaultSlideContext>({
  currentSlide: 0,
  previousSlide: -1,
  setSlide: () => {},
  setPreviousSlide: () => {}
});

const CurrentSlideContextProvider: React.FC<{}> = ({ children }) => {
  const [slide, setSlide] = useState<number>(0);
  const [previousSlide, setPreviousSlide] = useState<number>(-1);

  const setCurrentSlide = (index: number): void => {
    setSlide(index);
  };

  const setPreviousSlideIndex = (index: number): void => {
    setPreviousSlide(index);
  };

  return (
    <SliderContext.Provider
      value={{
        currentSlide: slide,
        previousSlide: previousSlide,
        setSlide: setCurrentSlide,
        setPreviousSlide: setPreviousSlideIndex
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default CurrentSlideContextProvider;
