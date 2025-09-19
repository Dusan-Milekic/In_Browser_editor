import Header from "./Header";
import Navbar from "./Navbar";
import Editor from "./Editor";
import "./App.css";

function App() {
  return (
    <>
      <main className="h-dvh">
        <div className="navigation-bar absolute w-64 transition-all h-full">
          <Navbar></Navbar>
        </div>

        <div className="all-content w-full relative left-64 transition-all h-full flex flex-col">
          <Header></Header>
          <div className="holder h-full">
            <Editor></Editor>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
