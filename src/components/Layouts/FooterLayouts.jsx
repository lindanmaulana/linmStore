import { useEffect, useState } from "react";
import footer1Img from "../../assets/images/footer1.png";
import FooterContent from "../Fragments/FooterContent";

const FooterLayouts = () => {
  const [derajat, setDerajat] = useState(0);
  const handleScroll = () => {
    const height = window.pageYOffset;

    setDerajat(height);
  };

  console.log(derajat);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterContent>
      <FooterContent.FooterText
        stateScroll={derajat}
        title="Download & Enjoy"
        description="Unduh aplikasi kami untuk cara tercepat dan ternyaman untuk memesan
 tiket Bus LinmTrans. Kemudahan yang akan anda dapatkan jika
 menginstall LinmTrans apps di Playstore. Jadikan acara kumpul
 keluarga semakin seru."
      />
      <FooterContent.FooterImage src={footer1Img} stateScroll={derajat} />
    </FooterContent>
  );
};

export default FooterLayouts;

// title="Download & Enjoy"
// description="Unduh aplikasi kami untuk cara tercepat dan ternyaman untuk memesan
// tiket Bus LinmTrans. Kemudahan yang akan anda dapatkan jika
// menginstall LinmTrans apps di Playstore. Jadikan acara kumpul
// keluarga semakin seru."
