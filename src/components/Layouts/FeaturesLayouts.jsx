import SectionFeatures from "../Fragments/SectionFeatures";
const FeaturesLayouts = () => {
  return (
    <section>
      <div className="container mx-auto w-full flex flex-col px-4 py-8 lg:px-28">
        <div>
          <h1 className="text-2xl font-semibold">Features</h1>
        </div>
        <SectionFeatures />
        <div className="self-center pt-10">
          <h1>Take a look at our</h1>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLayouts;
