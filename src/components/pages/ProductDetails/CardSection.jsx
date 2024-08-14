import { Link } from "react-router-dom";

function CardSection(){
    const sta1 = '/assets/static/78c19833e196460df0dfa9f3e953.png';
    const sta2 = '/assets/static/532a222f08c1500c16aa3ed52c16aa20.png';
    const sta3 = '/assets/static/87d6513c34f10bac56e324f01ec77185.png';
    return(
        <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-8">

        <div className="sm:w-full rounded-lg mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[220px]  md:w-[223px] md:h-[180px]  sm:h-[180px]">
          <img src={sta3} alt="Headphones" className="mx-auto -mt-14 lg:w-[121.49px] lg:h-[146px]  md:w-[84.04px] md:h-[101px]  sm:w-[84.04px] sm:h-[101px]" />
          <h3 className="text-xl text-center mt-6 mb-5  font-semibold">HEADPHONES</h3>
          <Link to="/Headphones" className="text-center text-Desc_gray hover:text-main_orange block">
            SHOP <span className="ml-1 text-main_orange "> &gt; </span>
          </Link>
        </div>

        <div className="sm:w-full rounded-lg mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[220px]  md:w-[223px] md:h-[180px] sm:h-[180px]">
          <img src={sta1} alt="Headphones" className="mx-auto -mt-14 lg:w-[121.49px] lg:h-[146px]  md:w-[84.04px] md:h-[101px]  sm:w-[84.04px] sm:h-[101px]" />
          <h3 className="text-xl text-center mt-6 mb-5  font-semibold">SPEAKERS</h3>
          <Link to="/Speakers" className="text-center text-Desc_gray hover:text-main_orange block">
            SHOP <span className="ml-1 text-main_orange "> &gt; </span>
          </Link>
        </div>

        <div className="sm:w-full rounded-lg mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[220px]  md:w-[223px] md:h-[180px]   sm:h-[180px]">
          <img src={sta2} alt="Headphones" className="mx-auto -mt-14 lg:w-[121.49px] lg:h-[146px]  md:w-[84.04px] md:h-[101px]  sm:w-[84.04px] sm:h-[101px]" />
          <h3 className="text-xl text-center mt-6 mb-5  font-semibold">EARPHONES</h3>
          <Link to="/Earphones" className="text-center text-Desc_gray hover:text-main_orange block">
            SHOP <span className="ml-1 text-main_orange "> &gt; </span>
          </Link>
        </div>
       
      </div>
      
    );
}
export default CardSection;