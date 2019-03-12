import React, { useState } from 'react';
import { Provider } from './contextAPI'
import ShowText from './ShowText'

const App = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  const contextValue = { show, toggle }
  return (
    <Provider value={contextValue}>
      <div>
        <ShowText />
        {show ? <div>you can't see me</div> : null}
      </div>
    </Provider>
  );
}

export default App;