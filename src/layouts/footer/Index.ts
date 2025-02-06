import Logo from "@/components/logo/Index";
import metaplex from "@/assets/images/metaplex.svg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-5 md:py-5 mt-5 xl:py-16 px-[4%] bg-black-6">
      <div className="flex items-center justify-between">
        <Logo className="h-5 md:h-5 xl:h-7" />
        <div className="flex flex-col md:flex-row md:items-center gap-1.5">
          <p className="text-body-5 md:text-body-4 text-white-5">Powered by</p>
          <img src={metaplex} alt="" className="h-3 md:h-4 xl:h-5" />
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center gap-1.5">
          <p className="text-body-4 text-white-5">Join us On</p>
          <FaXTwitter className="md:text-[16px] xl:text-[28px] text-white-1" />
        </div>
      </div>
      <div className="flex md:hidden mx-auto justify-end mt-2">
        <div className="flex items-center gap-1.5">
          <p className="text-body-4 text-white-5">Join us On</p>
          <FaXTwitter className="md:text-[16px] xl:text-[28px] text-white-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
