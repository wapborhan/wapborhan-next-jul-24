import Preloader from "@/src/components/Preloader";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
