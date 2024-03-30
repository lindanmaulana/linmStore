import MostCard from "../Elements/MostPopularCard/MostCard";
import destinationOne from "../../assets/images/destination-one.jpg";
import destinationTwo from "../../assets/images/destination-two.jpg";
import destinationTree from "../../assets/images/destination-tree.jpg";
import destinationFour from "../../assets/images/destination-four.jpg";
import destinationFive from "../../assets/images/destination-five.jpg";

const SectionMostPopular = () => {
  return (
    <div className="w-full snap-mandatory snap-x flex gap-4 overflow-x-scroll">
      <MostCard
        bgDestination={destinationOne}
        price="1.000.000"
        title="Full trans jawa"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, inventore ipsam. Cupiditate aut ipsum corrupti!"
      />
      <MostCard
        bgDestination={destinationTwo}
        price="1.000.000"
        title="Kota Bandung"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, inventore ipsam. Cupiditate aut ipsum corrupti!"
      />
      <MostCard
        bgDestination={destinationTree}
        price="1.000.000"
        title="Candi Borobudur"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, inventore ipsam. Cupiditate aut ipsum corrupti!"
      />
      <MostCard
        bgDestination={destinationFour}
        price="1.000.000"
        title="Lembah Bromo"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, inventore ipsam. Cupiditate aut ipsum corrupti!"
      />
      <MostCard
        bgDestination={destinationFive}
        price="1.000.000"
        title="Pantai Pangandaran"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, inventore ipsam. Cupiditate aut ipsum corrupti!"
      />
    </div>
  );
};

export default SectionMostPopular;
