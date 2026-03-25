import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="mt-8 grid grid-cols-5 gap-4">
        <Sidebar/>
        <h1 className="col-span-4 my-8 text-center text-5xl font-bold">Hello World</h1>
    </div>
  );
}

export default App;
