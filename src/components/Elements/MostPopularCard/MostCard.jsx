import {
  IoBus,
  IoBusinessSharp,
  IoCar,
  IoArrowRedoCircleOutline,
  IoStarOutline,
  IoStar,
} from "react-icons/io5";
import { useState } from "react";
const MostCard = (props) => {
  const { bgDestination, price, title, description } = props;
  const [star, setStar] = useState(true);
  const handleClickStar = () => {
    setStar(!star);
  };
  return (
    <div className="snap-center snap-always">
      <div className=" w-64 h-72 shadow-lg shadow-black flex flex-col justify-center items-center gap-2 rounded-md overflow-hidden lg:w-80 lg:h-96">
        <div
          className="relative w-full h-3/5 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgDestination})` }}
        >
          <div className="absolute bottom-0 w-full flex justify-between bg-black/70 text-white">
            <div className="flex self-center gap-2 px-2">
              <IoBus />
              <IoBusinessSharp />
              <IoCar />
            </div>
            <div className="bg-blue-700 px-2 text-sm">
              <h1>RP{price}</h1>
            </div>
          </div>
        </div>
        <div className="h-2/5 flex flex-col justify-start items-start px-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-xs font-light ">{description}</p>
        </div>
        <div className="w-full flex justify-between px-2 py-2 border-2 divide-x-2">
          <div className="w-full flex justify-between px-2">
            <div className=" flex gap-2 self-center">
              <a href="" className="text-xs self-center text-black">
                get
              </a>
              <a href="" className="text-xs self-center text-black">
                about
              </a>
              <a href="" className="text-xs self-center text-black">
                check
              </a>
            </div>
            <div className="flex self-center text-black">
              <IoArrowRedoCircleOutline />
            </div>
          </div>
          <button
            onClick={handleClickStar}
            className="flex self-center text-black gap-2 pl-2 "
          >
            {star ? <IoStarOutline /> : <IoStar className="text-blue-500" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostCard;
