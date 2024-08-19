import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import HeadPhones from "./components/pages/HeadphonesPage/HeadPhones";
import SpeakerPage from "./components/pages/SpeakerPage/SpeakerPage";
import EarPhonesPage from "./components/pages/EarphonesPage/EarPhonesPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ProductDetailsPage from "./components/pages/ProductDetails/ProductDetailsPage";
import NotFoundPage from './components/pages/NotFound/NotFoundpage'
import RegisterPage from "./components/pages/Auth/RegisterPage";
import LoginPage from "./components/pages/Auth/LoginPage";
import AdminPage from "./components/pages/Admin/AdminPage";
import AddProductPage from "./components/pages/Admin/AddProductPage";
import AllProductsPage from "./components/pages/Admin/AllProductsPage";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";
import CheckoutPage from "./components/pages/Checout Page/CheckoutPage";
import { ProductsContextProvider } from "./store/ProductsContext";
import EditProductPage from "./components/pages/Admin/EditProductPage";

function App() {
  return (
    <UserProgressContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Headphones" element={<HeadPhones />} />
              <Route path="/Speakers" element={<SpeakerPage />} />
              <Route path="/Earphones" element={<EarPhonesPage />} />
              <Route path="/About US" element={<AboutPage />} />
              <Route path="/products/:slug" element={<ProductDetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/Admin/add-product" element={<AddProductPage />} />
              <Route path="/Admin/edit-product/:id" element={<EditProductPage />} />
              <Route path="/Admin/all-products" element={<AllProductsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </UserProgressContextProvider>
  )
}

export default App;
