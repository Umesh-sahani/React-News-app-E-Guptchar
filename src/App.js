import Navbar from "./components/Navbar";
import News from "./components/News";


function App() {
  return (
    <>
      <Navbar/>
      <News pageSize={6} country="in" category="general"/>     
          
    </>
  );
}

export default App;
