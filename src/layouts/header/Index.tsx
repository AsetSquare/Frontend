import Button from "@/components/button/Index";
import Logo from "@/components/logo/Index";
import { TfiWallet } from "react-icons/tfi";
import Navigation from "../top-navigation/Index";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[5%] py-7">
      <div className="flex items-center md:gap-[10vw]">
        <Logo className="" />
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="md:hidden block">
          <Navigation />
        </div>
        <Button type="primary" className="flex items-center gap-2">
          <TfiWallet className="text-[17px]" />
          Connect <span className="hidden md:inline">Wallet</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
