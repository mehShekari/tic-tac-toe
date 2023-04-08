import Experience from "./experience";
import TempProvider from "./context/template";

function App() 
{
  return (
    <div className="App">
      <TempProvider>
        <Experience />
      </TempProvider>
    </div>
  );
}

export default App;
