import HomeScreen from "./screens/HomeScreen";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      
      <Nav />
      <Cart/>
      <HomeScreen />
      <br></br>
      <Footer />
      <br></br>
    </div>
  );
}

export default App;
