/* eslint-disable react/prop-types */
function ProductGallery({ gallery, id }) {
  let fMob = '';
  let fTab = '';
  let fDes = '';

  if(id.length > 1) {
    fMob = `https://localhost:44355/Gallery/${gallery.first.mobile}`;
    fTab = `https://localhost:44355/Gallery/${gallery.first.tablet}`;
    fDes = `https://localhost:44355/Gallery/${gallery.first.desktop}`;
  } else {
    fMob = gallery.first.mobile;
    fTab = gallery.first.tablet;
    fDes = gallery.first.desktop;
  }

  let sMob = '';
  let sTab = '';
  let sDes = '';

  if(id.length > 1) {
    sMob = `https://localhost:44355/Gallery/${gallery.second.mobile}`;
    sTab = `https://localhost:44355/Gallery/${gallery.second.tablet}`;
    sDes = `https://localhost:44355/Gallery/${gallery.second.desktop}`;
  } else {
    sMob = gallery.second.mobile;
    sTab = gallery.second.tablet;
    sDes = gallery.second.desktop;
  }

  let tMob = '';
  let tTab = '';
  let tDes = '';

  if(id.length > 1) {
    tMob = `https://localhost:44355/Gallery/${gallery.third.mobile}`;
    tTab = `https://localhost:44355/Gallery/${gallery.third.tablet}`;
    tDes = `https://localhost:44355/Gallery/${gallery.third.desktop}`;
  } else {
    tMob = gallery.third.mobile;
    tTab = gallery.third.tablet;
    tDes = gallery.third.desktop;
  }

  return (
    <section className="container p-5 mx-auto">
      <div className=" grid justify-center grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-1 gap-5">
        <div className=" col-start-1 col-end-1 rounded-md flex justify-center">
          <img
            src={fMob}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={fTab}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={fDes}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
        <div className=" col-start-1 col-end-1 rounded-md flex justify-center">
          <img
            src={sMob}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={sTab}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={sDes}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
        <div className=" col-start-1 col-end-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 rounded-md flex justify-center">
          <img
            src={tMob}
            alt="gallery img"
            className=" md:hidden rounded-md"
          />
          <img
            src={tTab}
            alt="gallery img"
            className="hidden md:block lg:hidden rounded-md"
          />
          <img
            src={tDes}
            alt="gallery img"
            className="hidden lg:block rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;