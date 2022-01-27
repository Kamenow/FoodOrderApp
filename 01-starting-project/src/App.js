import { Fragment } from 'react';

import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
