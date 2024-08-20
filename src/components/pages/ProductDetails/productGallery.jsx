/* eslint-disable react/prop-types */
function ProductGallery({ gallery }) {
  return (
    <section className="container p-5 mx-auto">
      <div className=" grid justify-center grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-1 gap-5">
        <div className=" col-start-1 col-end-1 rounded-md flex justify-center">
          <img
            src={gallery.first.mobile}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={gallery.first.tablet}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={gallery.first.desktop}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
        <div className=" col-start-1 col-end-1 rounded-md flex justify-center">
          <img
            src={gallery.second.mobile}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={gallery.second.tablet}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={gallery.second.desktop}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
        <div className=" col-start-1 col-end-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 rounded-md flex justify-center">
          <img
            src={gallery.third.mobile}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={gallery.third.tablet}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={gallery.third.desktop}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;