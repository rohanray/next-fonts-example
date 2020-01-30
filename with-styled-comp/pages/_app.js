import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
      src: url('/static/fonts/Montserrat-Regular.ttf');
      src: url('/static/fonts/Montserrat-Bold.ttf');
      src: url('/static/fonts/Montserrat-Black.ttf');
      src: url('/static/fonts/Montserrat-ExtraLight.ttf');
  }
  p {
    font-family: 'Montserrat';
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
