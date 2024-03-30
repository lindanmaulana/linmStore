const FooterMenu = (props) => {
  const { title, children } = props;

  return (
    <>
      <h2 className="text-xl font-medium lg:text-sm lg:font-semibold">
        {title}
      </h2>
      <ul className="flex flex-col gap-3 font-normal text-lg lg:text-sm lg:font-semibold">
        {children}
      </ul>
    </>
  );
};

export default FooterMenu;
