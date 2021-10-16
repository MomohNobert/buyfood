import GlobalStyle from "../styles/GlobalStyle";
import "./_app.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
