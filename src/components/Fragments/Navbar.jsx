import { useEffect, useState } from "react";
import MenuList from "../Elements/Menu/MenuList";
import { GiFastArrow } from "react-icons/gi";
import { useResize } from "../../hooks/useResize";
const Navbar = () => {
  // const [widthScreen, setWidthScreen] = useState(
  //   document.documentElement.clientWidth
  // );
  const [menu, setMenu] = useState(false);
  const [derajat, setDerajat] = useState(window.pageYOffset);
  
  // costume hooks
  const widthScreen = useResize()

  const btnMenu = () => {
    setMenu(!menu);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidthScreen(document.documentElement.clientWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleNavbar = () => {
    const sizeDerajat = window.pageYOffset;

    setDerajat(sizeDerajat);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  console.clear();
  console.log({
    derajat: derajat,
  });

  return (
    <nav
      className={`w-full flex flex-col justify-center items-center z-50 px-4 text-blue-700 lg:px-12 lg:fixed transition-all duration-1000 ease-in-out  ${
        derajat > 0
          ? "lg:bg-white lg:text-blue-700 lg:top-0"
          : "lg:bg-transparent lg:text-white lg:top-12"
      } `}
    >
      <div className="w-full flex justify-between items-center py-2">
        <div className="basis-1/2 lg:basis-1/3 self-center">
          <h1 className="flex text-xl lg:text-3xl italic font-bold self-center">
            <GiFastArrow /> <span>Linm trans</span>
          </h1>
        </div>
        <div
          className={`basis-1/2 lg:basis-2/3 flex self-center justify-end items-center`}
        >
          {widthScreen < 768 ? (
            <button
              onClick={btnMenu}
              className="flex flex-col gap-1.5 z-50 self-center"
            >
              <span className="block bg-blue-700 w-8 h-px"></span>
              <span
                className={`block bg-blue-700 w-4 h-px transition-all duration-1000 ease-in-out ${
                  menu ? "" : "translate-x-4"
                }`}
              ></span>
              <span className="block bg-blue-700 w-8 h-px"></span>
            </button>
          ) : (
            <div className="w-full  flex justify-end gap-8 ">
              <MenuList />
            </div>
          )}
        </div>
      </div>

      <div className="w-full transition-all duration-1000 ease">
        {menu && (
          <div className={`w-full flex flex-col px-px py-6`}>
            <MenuList />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
