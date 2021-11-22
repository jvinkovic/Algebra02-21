import React from 'react';
import Vj510 from './vj510/Vj510';
import Vj511 from './vj511/Vj511';
import Vj512 from './vj512/Vj512';

function App() {
  return (
    <div>
      <h3>Class</h3>
      <Vj510 />
      <hr />
      <h3>Function</h3>
      <Vj511 />
      <hr />
      <h3>Vj 5.12</h3>
      <Vj512 />
    </div>
  );
}

export default App;
