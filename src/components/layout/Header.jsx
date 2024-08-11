/* eslint-disable react/prop-types */
import NavBar from "./NavBar";

function Header({ title }) {
  return (
    <header className=" bg-binary_black">
      <NavBar />
      <section className=" container py-3 px-5 mx-auto">
        <h1 className=" text-white text-center font-semibold text-xl sm:text-2xl md:text-3xl lg-text-4xl my-7 ">
          {title}
        </h1>
      </section>
    </header>
  );
}

export default Header;
