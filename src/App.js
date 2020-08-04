import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import Counter from './Counter'
import ReduxDemo from './ReduxDemo'
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <ReduxDemo />
    </Provider>
  );
}

export default App;
