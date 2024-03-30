// import LinkList from "../Elements/Menu/LinkList";
import FooterList from "../Elements/Footer/FooterList";
import FooterCards from "./FooterCards";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
// import { useEffect, useState } from "react";
const SectionFooter = () => {
    // const [derajat, setDerajat] = useState(0)

    // const handleScroll = () => {
    //     const height = window.pageYOffset;

    //     setDerajat(height)
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])
  return (
    <>
         <div className="basis-2/6 flex flex-col text-white gap-8">
          <h2 className="text-xl font-medium lg:text-sm lg:font-semibold">
            Kontak Kami
          </h2>
          <div className="flex gap-5">
            <a href="" className="text-[50px] self-center">
              <LiaPhoneVolumeSolid />
            </a>
            <div className="flex flex-col text-md font-semibold">
              <a href="">Butuh Bantuan?</a>
              <a href="">Call Us : (085) 322 701 120</a>
              <label htmlFor="">
                Email:{" "}
                <span>
                  <a href="">lindan13@gmail.com</a>
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg lg:text-sm lg:font-semibold">
              Kantor Pusat
            </h3>
            <p className="text-lg lg:text-sm lg:text-semibold">
              Jln.Desa muncangela Kabupaten Kuningan, Prov Jawa barat
            </p>
            <div className="flex gap-2">
              <a href="" className="text-xl group">
                <FaFacebookF className=" border-2 rounded-full w-10 h-10 p-2 group-hover:bg-[#297CBB] group-hover:border-none" />
              </a>
              <a href="" className="text-xl group">
                <FaInstagram className="border-2 rounded-full w-10 h-10 p-2 group-hover:bg-[#297CBB] group-hover:border-none" />
              </a>
              <a href="" className="text-xl group">
                <FaTwitter className="border-2 rounded-full w-10 h-10 p-2 group-hover:bg-[#297CBB] group-hover:border-none" />
              </a>
              <a href="" className="text-xl group">
                <FaLinkedinIn className="border-2 rounded-full w-10 h-10 p-2 group-hover:bg-[#297CBB] group-hover:border-none" />
              </a>
            </div>
          </div>
        </div>
      <FooterCards title="Tentang Kami">
        <FooterList>Profile Perusahaan</FooterList>
        <FooterList>Informasi Perusahaan</FooterList>
        <FooterList>Keterbukaan Informasi</FooterList>
        <FooterList>barang dan Jasa</FooterList>
      </FooterCards>
      <FooterCards title="Layanan">
        <FooterList>Segmen Usaha</FooterList>
        <FooterList>Standar Pelayanan</FooterList>
      </FooterCards>
      <FooterCards title="Tata Kelola Perusahaan">
        <FooterList>Pedoman dan Kebijakan</FooterList>
        <FooterList>Sertifikat ISO</FooterList>
        <FooterList>Score GCG</FooterList>
        <FooterList>Laporan Keuangan</FooterList>
      </FooterCards>
      <FooterCards title="Media dan Publikasi">
        <FooterList>Berita</FooterList>
        <FooterList>Siaran Pers</FooterList>
        <FooterList>Majalah Internal</FooterList>
      </FooterCards>
    </>
    // <div className="basis-1/6 text-white flex flex-col gap-3">
    // <div className="basis-1/6 text-white flex gap-3">
    //   <FooterMenu title="Tentang kami">
    //     <FooterList>Profile Perusahaan</FooterList>
    //     <FooterList>Informasi Perusahaan</FooterList>
    //     <FooterList>Keterbukaan Informasi</FooterList>
    //     <FooterList>barang dan Jasa</FooterList>
    //   </FooterMenu>
    //   <FooterMenu title="Layanan">
    //     <FooterList>Segmen Usaha</FooterList>
    //     <FooterList>Standar Pelayanan</FooterList>
    //   </FooterMenu>
    //   <FooterMenu title="Tata Kelola Perusahaan">
    //     <FooterList>Pedoman dan Kebijakan</FooterList>
    //     <FooterList>Sertifikat ISO</FooterList>
    //     <FooterList>Score GCG</FooterList>
    //     <FooterList>Laporan Keuangan</FooterList>
    //   </FooterMenu>
    //   <FooterMenu title="Media dan Publikasi">
    //     <FooterList>Berita</FooterList>
    //     <FooterList>Siaran Pers</FooterList>
    //     <FooterList>Majalah Internal</FooterList>
    //   </FooterMenu>
    // </div>
  );
};

export default SectionFooter;

{
  /* <LinkList>Profile Perusahaan</LinkList>
<LinkList>Informasi Perusahaan</LinkList>
<LinkList>Keterbukaan Informasi</LinkList>
<LinkList>Barang dan Jasa</LinkList> */
}
