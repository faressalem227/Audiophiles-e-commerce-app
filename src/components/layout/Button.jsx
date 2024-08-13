/* eslint-disable react/prop-types */
function Button({ orangeBtn, children, ...props }) {
  const orangeBtnClass =
    "p-3 w-[150px] sm:w-[200px] text-base font-semibold duration-300 text-white bg-main_orange hover:bg-hover_orange ";
  const grayBtnClass =
    "p-3 w-[150px] sm:w-[200px] text-base font-semibold duration-300 text-black bg-transparent border-2 border-black hover:text-white hover:bg-black";
  return (
    <button className={orangeBtn ? orangeBtnClass : grayBtnClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
