import ProductSection from "./ProductSection";
import CardSection from "./CardSection";
import EndSection from "./EndSection";
function SingleProductStatic({product}){
    return(
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h2 className="text-2xl font-ManRope font-bold leading-9 mb-6">YOU MAY ALSO LIKE</h2>
            </div>
            
           <ProductSection product={product}/>
            <CardSection/>
            <EndSection/>
        </div>
    );
}

export default SingleProductStatic;