import React, { useContext } from 'react';
import context from './contextAPI'

const showText = () => {
  const { toggle, show } = useContext(context);
  return <button onClick={toggle}>{show ? 'hidden' : 'show'}</button>
}

export default showText;