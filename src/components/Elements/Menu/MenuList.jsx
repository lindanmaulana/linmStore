import Publikasi from "../NavbarList/Publikasi";
import SegmentasiLayanan from "../NavbarList/SegmentasiLayanan";
import TentangKami from "../NavbarList/TentangKami";
import LinkList from "./LinkList";

const MenuList = () => {
  return (
    <>
      <LinkList to={""}>Beranda</LinkList>
      <LinkList
        to={""}
        list={<TentangKami />}
        width="200px"
        translate="-translate-x-9"
      >
        Tentang Kami ⌵
      </LinkList>
      <LinkList
        to={""}
        list={<SegmentasiLayanan />}
        translate="-translate-x-32"
      >
        Segmentasi Layanan ⌵
      </LinkList>
      <LinkList
        to={""}
        list={<Publikasi />}
        width="200px"
        translate="-translate-x-12"
      >
        Publikasi ⌵
      </LinkList>
      <LinkList to={""}>Kontak</LinkList>
    </>
  );
};

export default MenuList;
