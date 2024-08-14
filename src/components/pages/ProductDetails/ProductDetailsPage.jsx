import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ProductHeader from "./ProductHeader";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleProductStatic from "./SingleProductStatic";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:3333/products/${id}`;
    const fetchProduct = async () => {
      axios
        .get(url)
        .then(function (response) {
          setProduct(response.data);
          console.log(response.data);
        })
        .catch(function () {
          // handle error
          navigate("/NotFound");
        })
        .finally(function () {
          // always executed
          setTimeout(() => setLoading(false), 1000);
        });
    };
    fetchProduct();
  }, [id, navigate]);

  return (
    <main>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header hid="true" />
          <ProductHeader product={product} />
          <ProductFeatures product={product} />
          <ProductGallery product={product} />
          <SingleProductStatic product={product} />
          <Footer />
        </>
      )}
    </main>
  );
};

export default ProductDetailsPage;
