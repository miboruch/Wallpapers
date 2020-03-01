import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  font: {
    size: {
      xs: '10px',
      s: '12px',
      m: '16px',
      l: '20px',
      xl: '26px'
    },
    family: {
      futura: 'Futura',
      avanti: 'Avanti'
    }
  },
  colors: {
    background: '#000',
    main: '#2d2d2d'
  },
  mq: {
    mobileL: '@media all and (min-width: 370px)',
    tabletS: '@media all and (min-width: 512px)',
    tablet: '@media all and (min-width: 710px)',
    standard: '@media all and (min-width: 1024px)',
    desktop: '@media all and (min-width: 1440px)'
  }
};
