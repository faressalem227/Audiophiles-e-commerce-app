/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CheckoutModal({ closeCheckout }) {
  return (
    <div className=" p-5 font-ManRope flex flex-col gap-6">
      <div>
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              strokeWidth="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
      </div>
      <h3 className=" w-[200px] font-bold text-2xl">
        THANK YOU FOR YOUR ORDER
      </h3>
      <p className=" text-sm text-gray-400">
        You will receive an email confirmation shortly.
      </p>
      <div className=" flex justify-center mb-4">
        <button
          onClick={closeCheckout}
          className=" flex-1 uppercase p-3  text-base font-semibold duration-300 text-white bg-main_orange hover:bg-hover_orange "
        >
          <Link to="/">BACK TO HOME</Link>
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;