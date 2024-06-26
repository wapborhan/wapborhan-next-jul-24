import Preloader from "@/src/components/Preloader";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SalimovHead />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
