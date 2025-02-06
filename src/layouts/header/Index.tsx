import Logo from "@/components/logo/Index";
import Navigation from "../top-navigation/Index";
import WalletButton from "@/components/button/ConnectWalletButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[3.5%] py-7">
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
        <WalletButton type="primary" className="flex items-center gap-2" />
      </div>
    </div>
  );
};

export default Header;
