import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import HeadPhones from "./components/pages/HeadphonesPage/HeadPhones";
import SpeakerPage from "./components/pages/SpeakerPage/SpeakerPage";
import EarPhonesPage from "./components/pages/EarphonesPage/EarPhonesPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ProductDetailsPage from "./components/pages/ProductDetails/ProductDetailsPage";
<<<<<<< HEAD
import NotFoundPage from './components/pages/NotFound/NotFoundpage'
import Table from './components/pages/Table/Table'
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
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </Router>
=======
import NotFoundPage from "./components/pages/NotFound/NotFoundpage";
import { ProductsContextProvider } from "./store/ProductsContext";
function App() {
  return (
    <ProductsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Headphones" element={<HeadPhones />} />
          <Route path="/Speakers" element={<SpeakerPage />} />
          <Route path="/Earphones" element={<EarPhonesPage />} />
          <Route path="/About US" element={<AboutPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ProductsContextProvider>
>>>>>>> f08011b027228f763b1cf1283a1e65cc49a1501d
  );
}

export default App;
