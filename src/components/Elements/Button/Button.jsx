const Button = (props) => {
  const { children } = props;
  return (
    <button className="bg-[#2D9596] rounded-2xl py-2 text-white text-xs font-bold mt-4">
      {children}
    </button>
  );
};

export default Button;
