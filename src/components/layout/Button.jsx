/* eslint-disable react/prop-types */
function Button({ orangeBtn, children, ...props }) {
  const orangeBtnClass =
    "p-3 w-[200px] text-base text-white font-semibold bg-main_orange hover:bg-hover_orange duration-300";
  const grayBtnClass = "";
  return (
    <button className={orangeBtn ? orangeBtnClass : grayBtnClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
