import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
      };
      family: {
        futura: string;
        avanti: string;
      };
    };
    colors: {
      red: string;
      lightBlue: string;
      blue: string;
      darkBlue: string;
    };
    mq: {
      mobileL: string;
      tabletS: string;
      tablet: string;
      standard: string;
      desktop: string;
    };
  }
}
