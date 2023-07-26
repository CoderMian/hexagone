import "./App.css";
import Banner from "./components/banner/Banner";
import Navbaar from "./components/navbaar/Navbaar";
import Services from "./components/Services/Services";
import Testemonial from "./components/testimonial/Testemonial";
import Trusted from "./components/trusted/Trusted";
function App() {
  return (
    <>
      <Navbaar />
      <Banner />
      <Services />
      <Trusted />
      <Testemonial />
    </>
  );
}

export default App;
