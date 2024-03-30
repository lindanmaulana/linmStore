import Navbar from "../components/Fragments/Navbar";
import SectionHome from "../components/Fragments/SectionHome";
import HomeLayouts from "../components/Layouts/HomeLayouts";

const HomePage = () => {
  return (
    <HomeLayouts>
      <Navbar />
      <SectionHome />
    </HomeLayouts>
  );
};

export default HomePage;
