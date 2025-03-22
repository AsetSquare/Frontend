import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useOutsideClick } from "@/utils/click-outside/Index";

interface NavProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const refr = useOutsideClick<HTMLDivElement>(() => setShowMenu(false));

  return (
    <div>
      <div className="hidden md:flex items-center gap-5 mr-8">
        <NavItem to="/explorer">Explorer</NavItem>
        <NavItem to="https://docs.assetsquare.xyz/">Docs</NavItem>
        <NavItem to="/dashboard">My Account</NavItem>
      </div>
      <div className="md:hidden relative" ref={refr}>
        <div className="text-white-2" onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu className="text-[22px]" />
        </div>
        {showMenu && (
          <div className="absolute z-50 top-10 shadow-variant-2 -left-1 bg-green-dim-7 w-[30.5vw] px-4 py-3 rounded-md">
            <div className="block my-1.5">
              <NavItem to="/explorer">Explorer</NavItem>
            </div>
            <div className="block my-1.5">
              <NavItem to="https://docs.assetsquare.xyz/">Docs</NavItem>
            </div>
            <div className="block my-1.5">
              <NavItem to="/dashboard">My Account</NavItem>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

//Nav Menu Item Link
export const NavItem = ({ children, to, className }: NavProps) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return (
          "relative transition-all duration-[800ms] text-body-4 md:text-body-3 hover:text-white-2 " +
          (isActive
            ? " text-white-1 !font-bold "
            : " text-white-2 md:text-white-4 font-medium md:font-normal ") +
          className
        );
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};
