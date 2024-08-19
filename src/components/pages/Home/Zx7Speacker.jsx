import Button from "../../layout/Button";
import { Link } from "react-router-dom";
function Zx7Speacker() {
  return (
    <div className=" h-[400px] bg-[#dedede]  p-10 flex flex-col gap-10 justify-center rounded-md bg-Zx7Mobile md:bg-Zx7Tablet lg:bg-Zx7Desktop bg-no-repeat bg-cover lg:bg-fill bg-right">
      <h2 className="font-bold text-xl sm:text-2xl m:text-3xl lg:text-4xl">
        Zx7Speacker
      </h2>
      <Button>
        <Link to="products/zx7-speaker">See Product</Link>
      </Button>
    </div>
  );
}

export default Zx7Speacker;
