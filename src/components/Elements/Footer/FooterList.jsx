const FooterList = (props) => {
  const { children } = props;
  return (
    <li>
      <a href="" className="hover:border-b">
        {children}
      </a>
    </li>
  );
};

export default FooterList;
