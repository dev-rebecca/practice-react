import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Hats from "./components/Hats/Hats";

function App() {
  return (
    <Fragment>
      <Header />
      <section>
        <Hats />
      </section>
    </Fragment>
  );
}

export default App;
