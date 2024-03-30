const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
    />
  );
};

export default Input;
