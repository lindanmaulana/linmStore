import "./App.css";
import FeaturesPage from "./Pages/featuresPage";
import FooterPage from "./Pages/footerPage";
import HomePage from "./Pages/homePage";
import MostPopularPage from "./Pages/mostPopularPage";
import { GiFastArrow } from "react-icons/gi";
import { FcBullish } from "react-icons/fc";
function App() {
  return (
    <>
      <HomePage />
      <FeaturesPage />
      <MostPopularPage />
      <FooterPage />
      <div className="w-full bg-white px-8 py-6 flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="w-full flex self-center justify-start">
          <FcBullish className="text-[70px] lg:text-[50px]" />{" "}
          <h3 className="flex flex-col self-end text-blue-400">
            <span className="text-xl lg:text-sm">Transportasi</span>
            <span className="text-xl lg:text-sm">Indonesia</span>
          </h3>
        </div>
        <div className="w-full flex self-center justify-start lg:justify-end">
          <h3 className="flex text-4xl text-blue-700 font-bold italic lg:text-2xl">
            <GiFastArrow /> <span>Linm Trans</span>
          </h3>
        </div>
      </div>
      <div className="px-8 py-8 bg-[#224D8F] text-white">
        <p className="font-medium">© 2024 LinmTrans. All rights reserved</p>
      </div>
    </>
  );
}

export default App;
