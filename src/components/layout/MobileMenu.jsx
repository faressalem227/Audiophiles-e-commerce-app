import ListItem from "./ListItem";
// eslint-disable-next-line react/prop-types
function MobileMenu({ handleMenu }) {
  return (
    <div className=" bg-black absolute w-full h-full p-5 md:hidden">
      <div className=" flex justify-between items-center">
        <h4 className=" text-xl text-main_orange text-center mb-4">pages</h4>
        <button onClick={handleMenu}>
          <svg
            className="fill-white  hover:fill-main_orange duration-300"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <rect id="Rectangle" width="16" height="3" />
              <rect id="Rectangle Copy" y="6" width="16" height="3" />
              <rect id="Rectangle Copy 2" y="12" width="16" height="3" />
            </g>
          </svg>
        </button>
      </div>

      <span className=" block h-[1px] bg-binary_black mb-4"></span>
      <menu className="    flex flex-col gap-5 items-center">
        <ListItem path="/">HOME</ListItem>
        <ListItem path="/Headphones">HEADPHONES</ListItem>
        <ListItem path="/Speakers">SPEAKERS</ListItem>
        <ListItem path="/Earphones">EARPHONES</ListItem>
      </menu>
    </div>
  );
}

export default MobileMenu;
