import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import IconsSosmed from "../Elements/Icons/IconsSosmed";
import Background from "../../assets/images/background.jpg";
const AuthLayouts = (props) => {
  const { title, type, children } = props;
  return (
    <div className="container w-full mx-auto">
      <div className="w-full min-h-screen flex flex-wrap py-20 px-16 gap-10 lg:gap-0">
        <div
          className="hidden w-full lg:w-1/2 bg-cover bg-bottom lg:flex rounded-l-xl shadow-md shadow-black"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="self-end text-start px-20 pb-10 text-white">
            <h1 className="flex justify-center gap-3 text-2xl font-bold">
              <span className="self-center bg-white w-10 h-1"></span>Start your
              journey now
            </h1>
            <p className="pl-[103px] text-sm opacity-70">
              Start create your amazing website with url login into your acount
              now and huwala{" "}
            </p>
          </div>
        </div>
        <div
          action=""
          className="relative w-full lg:w-1/2 flex flex-col justify-center items-center shadow-md shadow-black rounded-r-xl"
        >
          <div className="flex flex-col px-36 gap-2">
            <h1 className="  text-2xl font-bold">{title}</h1>
            <p className="text-sm text-black/70">
              Wellcome, Please fill {type} to sign in into your acount
            </p>
            {children}
            <hr className="mt-5 " />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-black/70">You can also login with</h1>
            <div className="flex justify-center gap-3">
              <IconsSosmed>
                <AiFillFacebook />
              </IconsSosmed>
              <IconsSosmed>
                <AiOutlineGoogle />
              </IconsSosmed>
              <IconsSosmed>
                <AiOutlineTwitter />
              </IconsSosmed>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col px-36 gap-2">
    //   <h1 className="  text-2xl font-bold">{title}</h1>
    //   <p className="text-sm text-black/70 pb-4">
    //     Wellcome, Please fill {type} to sign in into your acount
    //   </p>
    //   {children}
    // </div>
  );
};

export default AuthLayouts;
