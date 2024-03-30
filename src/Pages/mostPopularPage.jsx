import MostPopularLayouts from "../components/Layouts/MostPopularLayouts";
import bgSection from "../assets/images/most-popular.jpg";
const MostPopularPage = () => {
  return (
    <MostPopularLayouts bgSection={bgSection} title="Most Popular Tours" />
  );
};

export default MostPopularPage;
