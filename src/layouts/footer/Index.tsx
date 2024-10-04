import Logo from "@/components/logo/Index";
import metaplex from "@/assets/images/metaplex.svg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-10 md:py-16 px-[4%] bg-black-6">
      <Logo className="h-7" />
      <div className="flex items-center gap-1.5">
        <p className="text-body-4 text-white-5">Powered by</p>
        <img src={metaplex} alt="" className="h-5" />
      </div>
      <div className="flex items-center gap-1.5">
        <p className="text-body-4 text-white-5">Join us On</p>
        <FaXTwitter className="text-[28px] text-white-1" />
      </div>
    </div>
  );
};

export default Footer;
