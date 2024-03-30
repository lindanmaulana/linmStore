import { Link } from "react-router-dom";
const FooterApps = (props) => {
  const { logo, title1, title2 } = props;
  return (
    <button className="w-52 flex border-2 border-white px-5 py-2 text-white rounded-xl gap-x-2 group hover:bg-white hover:text-slate-800">
      <Link className="text-4xl text-white basis-1/4 self-center group-hover:text-slate-800">
        {logo}
      </Link>
      <div className="flex flex-col basis-3/2 text-start">
        <span className="text-lg font-bold ">{title1}</span>
        <span className="text-xs font-semibold">{title2}</span>
      </div>
    </button>
  );
};

export default FooterApps;
