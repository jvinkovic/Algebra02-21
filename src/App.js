import React from 'react';
import Vj2311 from './vj2311/Vj2311';
import Vj510 from './vj510/Vj510';
import Vj511 from './vj511/Vj511';
import Vj512 from './vj512/Vj512';
import Vj513 from './vj513/Vj513';
import Vj514 from './vj514/Vj514';

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

      <hr />
      <h3>Vj 5.13</h3>
      <Vj513 />

      <hr />
      <h3>Vj 23.11.</h3>
      <Vj2311 />

      <hr />
      <h3>Vj 5.14</h3>
      <Vj514 />
    </div>
  );
}

export default App;
