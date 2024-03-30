const SectionHome = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[url('./assets/images/hero-section.jpg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h1 className=" text-3xl lg:text-4xl text-white italic font-bold">
          Find your special tour today
        </h1>
        <h2 className="text-xl lg:text-3xl text-white font-semibold">
          With Linm Trans
        </h2>
        <button className="w-30 lg:w-40 text-white bg-blue-500 px-4 py-1 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SectionHome;
