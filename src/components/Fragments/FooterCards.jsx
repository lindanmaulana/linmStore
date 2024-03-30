const FooterCards = (props) => {
  const { title, children } = props;
  return (
    <div className="basis-1/6 text-white flex flex-col gap-3">
      <h2 className="text-xl font-medium lg:text-sm lg:font-semibold">
        {title}
      </h2>
      <ul className="flex flex-col gap-3 font-normal text-lg lg:text-sm lg:font-semibold">
        {children}
      </ul>
    </div>
  );
};

export default FooterCards;
