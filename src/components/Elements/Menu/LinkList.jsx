import { useState } from "react";
import { Link } from "react-router-dom";

const LinkList = (props) => {
  const { children, list, translate } = props;
  const [menu, setMenu] = useState(false);

  const handleEnter = () => {
    setMenu(true);
  };

  const handleLeave = () => {
    setMenu(false);
  };

  console.log(list);
  return (
    <Link
      className="relative hover:border-b hover:text-blue-500"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {menu && (
        <div
          className={`absolute top-6 bg-white text-slate-400 ${translate} rounded-md`}
        >
          {list}
        </div>
      )}
    </Link>
  );
};

export default LinkList;

// div className="flex flex-col absolute top-8 bg-white"
