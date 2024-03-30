import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import FooterApps from "../Elements/Footer/FooterApps";
import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";

const FooterContent = (props) => {
  const { children } = props;
  return (
    <div className="w-full bg-[#5392F9] flex flex-col justify-center items-center py-9 lg:px-10 lg:flex-row">
      {children}
    </div>
  );
};

const FooterText = (props) => {
  const { title, description, stateScroll } = props;

  // state
  const [phone, setPhone] = useState(0);
  const [desktop, setDesktop] = useState(0);
  const widthScreen = useResize()
  //

  // set state untuk setiap transisi bagian element
  const transisiTitle = {
    phone: phone < 1900 ? "translate-y-[300px]" : "",
    desktop: desktop < 1223 ? "translate-y-[400px]" : "",
  };

  const transisiDescription = {
    phone: phone < 2100 ? "translate-y-[300px]" : "",
    desktop: desktop < 1302 ? "translate-y-[400px]" : "",
  };

  const transisiButton = {
    phone: phone < 2222 ? "translate-y-[300px]" : "",
    desktop: desktop < 1382 ? "translate-y-[400px]" : "",
  };
  //

  // handle size screen
  // const handleResize = () => {
  //   setWidthScreen(document.documentElement.clientWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  //

  // handle event scroll
  useEffect(() => {
    if (document.documentElement.clientWidth <= 769) {
      setPhone(stateScroll);
    } else {
      setDesktop(stateScroll);
    }
  }, [stateScroll]);

  console.table({ stateScroll: stateScroll, widthScreen: widthScreen });
  //

  return (
    <div
      className={`overflow-hidden basis-full self-center flex flex-col gap-5 px-4 lg:px-8 lg:basis-1/2
      `}
    >
      <h2
        className={`text-3xl text-white font-bold lg:text-4xl transition-all duration-1000 ease-in-out ${
          widthScreen <= 769 ? transisiTitle.phone : transisiTitle.desktop
        } `}
      >
        {title}
      </h2>
      <p
        className={`text-md text-white font-semibold leading-7 transitiona-all duration-1000 ease-in-out ${
          widthScreen <= 769 ? transisiDescription.phone : transisiDescription.desktop
        }`}
      >
        {description}
      </p>
      <div
        className={`flex flex-col gap-2 transition-all duration-1000 ease-in-out lg:flex-row lg:gap-4 ${
          widthScreen <= 769 ? transisiButton.phone : transisiButton.desktop
        } `}
      >
        <FooterApps
          logo={<BiLogoPlayStore />}
          title1="Google Play"
          title2="Download Now"
        />
        <FooterApps
          logo={<BiLogoApple />}
          title1="App Store"
          title2="Download Now"
        />
      </div>
    </div>
  );
};

const FooterImage = (props) => {
  const { src, stateScroll } = props;
  const [phone, setPhone] = useState(0);
  const [desktop, setDesktop] = useState(0);
  // const [widthScreen, setWidthScreen] = useState(document.documentElement.clientWidth);
  const widthScreen = useResize()

  const transisi = {
    phone: phone < 2320 ? "translate-y-[400px]" : "",
    desktop: desktop < 1350 ? "translate-y-[500px]" : "",
  };

  // const handleResize = () => {
  //   setWidthScreen(document.documentElement.clientWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    if (document.documentElement.clientWidth <= 769) {
      setPhone(stateScroll);
    } else {
      setDesktop(stateScroll);
    }
  }, [stateScroll]);

  console.table(stateScroll, widthScreen);
  return (
    <div className="overflow-hidden basis-full self-end lg:basis-1/2 ">
      <img
        src={src}
        alt=""
        width="100%"
        className={`transition-all duration-1000 ease-in-out ${
          widthScreen <= 769 ? transisi.phone : transisi.desktop
        }`}
      />
    </div>
  );
};

FooterContent.FooterText = FooterText;
FooterContent.FooterImage = FooterImage;
export default FooterContent;

// title
// ${width < 769 ? stateTitlePhone : stateTitleDesktop}

// description
// ${
//   width < 769 ? stateDescriptionPhone : stateDescriptionDesktop
// }

// button
// ${
//   width < 769 ? stateButtonPhone : stateButtonDesktop
// }

// pilihan kedua mengelola transisi setiap elemen dan setiap ukurn layarnya namun kurang dalam soal keterbacaan
// const transisi = {
//   title: {
//     phone: phone < 1900 ? "translate-y-[300px]" : "",
//     desktop: desktop < 1223 ? "translate-y-[400px]" : "",
//   },
//   description: {
//     phone: phone < 2100 ? "translate-y-[300px]" : "",
//     desktop: desktop < 1302 ? "translate-y-[400px]" : "",
//   },
//   button: {
//     phone: phone < 2222 ? "translate-y-[300px]" : "",
//     desktop: desktop < 1382 ? "translate-y-[400px]" : "",
//   },
// };
// const TitlePhone = transisi.title.phone;
// const titleDesktop = transisi.title.desktop;
// const descPhone = transisi.description.phone;
// const descDesktop = transisi.description.desktop;
// const buttonPhone = transisi.button.phone;
// const buttonDesktop = transisi.button.desktop;
