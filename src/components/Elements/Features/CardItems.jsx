const CardItems = (props) => {
  const { transisiMobile, transisiDesktop, icons, title, paragraph } = props;
  const width = window.innerWidth;

  return (
    // card features items
    <div
      className={`flex gap-2 px-6 py-8 ${width < 769 ? transisiMobile : transisiDesktop}  transition-all duration-1000 ease-in-out`}
    >
      <div>
        <div className="bg-blue-500 px-1 py-1 rounded-full">
          <a href="">
            <span className="text-2xl text-white">{icons}</span>
          </a>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-sm text-black/40">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardItems;
