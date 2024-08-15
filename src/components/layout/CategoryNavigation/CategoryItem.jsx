/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function CategoryItem({ title, src, path }) {
  return (
    <div className="font-ManRope bg-hover_grey flex-1 p-5 rounded-lg flex flex-col items-center justify-end relative h-[250px]">
      <img
        src={src}
        alt={`${title} image`}
        className="w-[275px] h-[275px] absolute left-1/2 top-[40px] transform -translate-x-1/2 -translate-y-1/2"
      />
      <h3 className="text-black text-center text-2xl font-bold mt-28">
        {title}
      </h3>
      <button className=" m-auto p-3 mt-4" aria-label={`Shop ${title}`}>
        <Link to={path} className="flex gap-2 items-center">
          <p className="text-gray-500 font-semibold hover:text-main_orange transition duration-300 text-lg">
            Shop
          </p>
          <svg
            className=" mt-1"
            width="8"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}

export default CategoryItem;
