import NavBar from "./Component/NavBar";
import MainForm from "./Component/MainForm";

function App() {
  return (
    <div className="flex h-screen items-center justify-center  bg-[#040406]">
      <div className="m-auto">
        <NavBar />
        <MainForm />
      </div>
    </div>
  );
}

export default App;