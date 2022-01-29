import { Fragment, useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Hats from "./components/Hats/Hats";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = props => {
    setCartIsShown(true);
  }

  const closeCartHandler = props => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={closeCartHandler}/>}
      <Header onShowCart={openCartHandler}/>
      <section>
        <Hats />
      </section>
    </Fragment>
  );
}

export default App;
