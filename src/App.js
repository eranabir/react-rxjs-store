import React from 'react';
import './App.css';
import {store,StoreProvider} from "./store";
import Root from "./Root";


function App() {
  return (
      <StoreProvider store={store}>
          <Root/>
      </StoreProvider>

  );
}

export default App;
