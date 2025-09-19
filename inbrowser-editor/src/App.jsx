import Header from "./Header";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <main className="">
        <div className="navigation-bar absolute w-64 transition-all">
          <Navbar></Navbar>
        </div>

        <div className="all-content w-full relative left-64 transition-all">
          <Header></Header>
        </div>
      </main>
    </>
  );
}

export default App;
