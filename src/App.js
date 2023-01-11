import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.scss'

function App() {
  return (
    <header className="header">
      <Navbar />
      <Header />
    </header>
  );
}

export default App;
