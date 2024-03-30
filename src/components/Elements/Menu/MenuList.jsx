import Publikasi from "../NavbarList/Publikasi";
import TentangKami from "../NavbarList/TentangKami";
import LinkList from "./LinkList";

const MenuList = () => {
  return (
    <>
      <LinkList to={""}>Beranda ⌵</LinkList>
      <LinkList to={""} list={<TentangKami />} width="200px">
        Tentang Kami ⌵
      </LinkList>
      <LinkList to={""}>Segmentasi Layanan ⌵</LinkList>
      <LinkList to={""} list={<Publikasi />} width="200px">
        Publikasi ⌵
      </LinkList>
      <LinkList to={""}>Kontak ⌵</LinkList>
    </>
  );
};

export default MenuList;
