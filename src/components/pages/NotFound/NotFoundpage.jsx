import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundpage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Faild to load the products</p>
      <Link to='/' className="bg-main_orange text-white hover:bg-hover_orange px-5 py-2">Go Home</Link>
    </section>
  );
};

export default NotFoundpage;
