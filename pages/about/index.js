import AboutSec from "@/src/components/pages/about/AboutSec";
import ScrollBar from "@/src/components/ScrollBar";
import Copyright from "@/src/components/sections/Copyright";
import Switcher from "@/src/components/Switcher";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
import HeaderSec from "@/src/components/pages/HeaderSec";
const Index = () => {
  useEffect(() => {
    try {
      jqueryFuntion();
    } catch (error) {
      console.error("Error executing javascript:", error);
      window.location.reload();
    }
  }, []);
  return (
    <Fragment>
      <div className="page-content">
        <HeaderSec />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <AboutSec />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
        <Switcher />
      </div>
    </Fragment>
  );
};
export default Index;
