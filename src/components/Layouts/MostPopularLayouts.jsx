import SectionMostPopular from "../Fragments/SectionMostPopular";

const MostPopularLayouts = (props) => {
  const {title } = props;
  return (
    <section>
      <div className=" w-full bg-cover bg-center min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="w-full flex flex-col justify-between items-start gap-5">
          <div>
            <h1 className="text-2xl text-white font-semibold px-4">{title}</h1>
          </div>
          {/* card */}
          <SectionMostPopular />
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default MostPopularLayouts;
