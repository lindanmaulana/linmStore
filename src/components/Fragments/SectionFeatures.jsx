import CardItems from "../Elements/Features/CardItems";
import { useEffect, useState } from "react";
import {
  MdOutlineContacts,
  MdOutlineCreditScore,
  MdOutlineCurrencyExchange,
  MdOutlineDataExploration,
  MdOutlineAssignmentInd,
  MdEqualizer,
} from "react-icons/md";
const SectionFeatures = () => {
  const [derajat, setDerajat] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const gulirMobile = window.pageYOffset;
      const gulirDesktop = window.pageYOffset;

      if (window.innerWidth <= 768) {
        setDerajat(gulirMobile);
      } else {
        setDerajat(gulirDesktop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  // console.log(derajat);
  return (
    <div className="relative w-full grid lg:grid-cols-3">
      <CardItems
        icons={<MdOutlineContacts />}
        title="Tour Management"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 161 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 140 ? "scale-100" : "scale-0"}
      />
      <CardItems
        icons={<MdOutlineCreditScore />}
        title="Hotel & Bus booking"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 287 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 140 ? "scale-100" : "scale-0"}
      />
      <CardItems
        icons={<MdOutlineCurrencyExchange />}
        title="Referral Affiliate"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 412 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 140 ? "scale-100" : "scale-0"}
      />
      <CardItems
        icons={<MdOutlineDataExploration />}
        title="Invite & Promotion"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 548 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 308 ? "scale-100" : "scale-0"}
      />
      <CardItems
        icons={<MdOutlineAssignmentInd />}
        title="Marketing & Advertising"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 673 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 308 ? "scale-100" : "scale-0"}
      />
      <CardItems
        icons={<MdEqualizer />}
        title="Reports & Analytics"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          molestiae?"
        transisiMobile={derajat > 805 ? "scale-100" : "scale-0"}
        transisiDesktop={derajat > 308 ? "scale-100" : "scale-0"}
      />
    </div>
  );
};

export default SectionFeatures;
