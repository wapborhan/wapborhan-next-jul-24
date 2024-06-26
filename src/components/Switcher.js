import Head from "next/head";
import { Fragment, useState } from "react";
const colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "red" },
  { id: 4, name: "blue" },
  { id: 5, name: "orange" },
  { id: 6, name: "yellowgreen" },
  { id: 7, name: "pink" },
  { id: 8, name: "goldenrod" },
];
const Switcher = () => {
  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Borhan - Personal Portfolio</title>
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
        <link
          rel="shortcut icon"
          href="assets/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ display: "block" }}
      >
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((color, idx) => (
              <li key={color?.id}>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  onClick={() => setColor(color?.name)}
                >
                  <img
                    src={`assets/styleswitcher/${color?.name}.png`}
                    alt={color?.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={`styleSecondColor ${toggle ? "close" : "open"}`}
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-cog" />
      </div>
    </Fragment>
  );
};
export default Switcher;
