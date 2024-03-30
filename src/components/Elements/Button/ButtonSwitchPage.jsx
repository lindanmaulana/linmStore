import { Link } from "react-router-dom";

const ButtonSwitchPage = (props) => {
  const { to, color, position, children } = props;
  return (
    <Link to={to} className={`text-xs ${color} ${position} px-2`}>
      {children}
    </Link>
  );
};

export default ButtonSwitchPage;
