import Logo from "@/components/logo/Index";

import Navigation from "../top-navigation/Index";
import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import WalletButton from "@/components/button/ConnectWalletButton";

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
        <UnifiedWalletButton
          currentUserClassName="!h-[2.5rem] !py-2 md:!py-2.5 !px-3 md:!px-6 !bg-green-light-6 border !rounded !border-transparent hover:!border-green-light-8 hover:bg-green-light-7"
          buttonClassName="bg-transparent"
          overrideContent={
            <WalletButton type="primary" className="flex items-center gap-2" />
          }
        ></UnifiedWalletButton>
      </div>
    </div>
  );
};

export default Header;
