import K1 from "./K1";
import K2 from "./K2";

function App() {
  return (
    <div>
      <K1 parent="App" />
      <K2 roditelj="App" y={3} />
    </div>
  );
}

export default App;
