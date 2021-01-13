import './App.css';
import Navbar from './Navbar';
import Select from './Select';

function App() {
  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: "column" }}>
      <Navbar />
      <br />
      <br />
      <Select />
    </div>
  );
}

export default App;
