import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import HeadPhones from "./components/pages/HeadphonesPage/HeadPhones";
import SpeakerPage from "./components/pages/SpeakerPage/SpeakerPage";
import EarPhonesPage from "./components/pages/EarphonesPage/EarPhonesPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ProductDetailsPage from "./components/pages/ProductDetails/ProductDetailsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Headphones" element={<HeadPhones />} />
        <Route path="/Speakers" element={<SpeakerPage />} />
        <Route path="/Earphones" element={<EarPhonesPage />} />
        <Route path="/About US" element={<AboutPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
