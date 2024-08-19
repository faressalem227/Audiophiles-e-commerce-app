// eslint-disable-next-line react/prop-types
function CartButton({ addProduct, removeProduct, productQuantity, bgColor }) {
  return (
    <div
      className={`w-[100px] flex justify-around items-center ${bgColor} p-2`}
    >
      <button className="text-gray-500" onClick={removeProduct}>
        -
      </button>
      <p className="font-semibold">{productQuantity}</p>
      <button className="text-gray-500" onClick={addProduct}>
        +
      </button>
    </div>
  );
}

export default CartButton;
